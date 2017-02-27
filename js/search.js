
window.document.body.onload = createSearchForm

var status = "";
var marriage_duration = 0;
var age = 0;
var age_spouse = 0;
var age_min = 0;
var age_max = 0;
var county = 0;
var age_child_min = 0;
var age_child_max = 0;


function createSearchForm() {
    var root = document.getElementById('form_container');

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        // console.log('State : ' + xmlHttp.readyState + '/' + xmlHttp.status);

        if (xmlHttp.readyState == 4 && (xmlHttp.status == 200 || xmlHttp.status == 0)) {
            root.innerHTML = xmlHttp.responseText;
            // console.log('Form loaded !');
            handleParams(root);
        }
    };

    xmlHttp.open('GET', 'search_form.html', true);
    xmlHttp.send(null);

}

function getParamByName(name) {
    var query = window.location.search;

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(query);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function readParams() {
    status = getParamByName('status');
    marriage_duration = parseInt(getParamByName('marriage_duration'));
    age =  parseInt(getParamByName('age'));
    age_spouse = parseInt(getParamByName('age_spouse'));
    county = getParamByName('county');
    age_child_min = parseInt(getParamByName('age_child_min'));
    age_child_max = parseInt(getParamByName('age_child_max'));

    if (status == 'married_couple') {
        age_min = Math.min(age, age_spouse);
        age_max = Math.max(age, age_spouse);
    } else {
        age_min = age;
        age_max = age;
    }
}

function handleParams() {
    readParams();
    if (status == "null") {
        return;
    }

    // Set the value for each form input
    document.getElementById('status').value = status;
    document.getElementById('marriage_duration').value =  marriage_duration;
    document.getElementById('age').value = age;
    document.getElementById('age_spouse').value = age_spouse;
    document.getElementById('county').value = county;
    document.getElementById('age_child_min').value = age_child_min;
    document.getElementById('age_child_max').value = age_child_max;

    // update tips
    updateMarriedTip();
    updateAgeTip();
    updateAgeSpouseTip();
    updateAgeChildTips();

    // update region selection
    document.getElementById('region_europe').checked = getParamByName('region_europe');
    document.getElementById('region_asia').checked = getParamByName('region_asia');
    document.getElementById('region_latam').checked = getParamByName('region_latam');
    document.getElementById('region_africa').checked = getParamByName('region_africa');

    // Hide the search form
    document.getElementById('search_form').className = "hide";
    document.getElementById('search_form_hidden').className = "card-content";

    // Display results
    displayResults();
}

function displayForm() {
    document.getElementById('search_form').className = "";
    document.getElementById('search_form_hidden').className = "card-content hide";
}

function displayResults() {
    Jaml.register('country', function(country) {
        div({cls:'card-title valign-wrapper', id:'card-title-' + country.code, style:''},
            img({src: 'img/flags/48x48/' + country.code + '.png', cls : 'circle'}),
            "&nbsp;",
            strong({style:'flex-grow:1'}, "&nbsp;",country.name,"&nbsp;"),
            "&nbsp;",
            span({style:'flex-grow:1; text-align : right;'},
                country.clh ? small(country.clh.signed + '/' + country.clh.applied + '&nbsp;') : ""
                ),
            country.clh ? img({
                                src:'img/un-blue.png',
                                title: ('Convention de la Haye signée en ' + country.clh.signed + ', entrée en vigueur en ' + country.clh.applied),
                                style:'height:40px'
                            }) : "",

            "&nbsp;",
            a(
                {href:'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/' + country.url, style:'width:48px; text-align:right;'},
                em({cls:'material-icons',style:'font-size:20px', title:"Voir la fiche pays"}, 'open_in_new')
            )
        );
    });

    Jaml.register('org', function(org) {
        span({cls:'chip blue darken-3'},
            a({cls:'white-text', href : org.url, target:'_blank', title : (org.title ? org.title : "")}, org.name)
        );
    });

    Jaml.register('warning', function(warning) {
        p({cls:'red-text text-darken-4 warning'}, warning);
    });
    Jaml.register('comment', function(comment) {
        p({cls:'comment'}, em(comment));
    });

    Jaml.register('stat', function(stat) {
        li(
            strong('' + stat.year),
            ' : ' ,
            span({cls : stat.delta == '↘' ? 'red-text darken-4' : stat.delta == '↗' ? 'green-text darken-4' : ''}, stat.delta + '&nbsp;' + stat.count)
        );
    });

    countries.forEach(processCountry);
}

function processCountry(country) {

    // Constraints verifications
    if (country.constraints) {
        allowed = verifyConstraints(country.constraints);
        if (!allowed) {
            console.log("Constraints check × " + country.name + " / " + country.code);
            return;
        }
    }

    // OAAs check
    var orgs = [];
    orgs = organizations.filter(function(org){
        if (org.countries.indexOf(country.code) < 0) {
            return false;
        }
        if (org.counties.indexOf(county) < 0) {
            return county == "all";
        }
        return true;
    });
    if (orgs.length == 0){
        return;
    }

    // APPO check
    var npos = []
    npos = appos.filter(function(appo){
        console.log("check " + appo.name);
        return (appo.countries.indexOf(country.code) >= 0);
    });

    // region check
    if (getParamByName('region_' + country.region) != 'on') {
        console.log("Region check × " + country.name + " / " + country.code);
        return;
    }

    // Ok, we can display it
    displayCountry(country, orgs, npos);
}

function displayCountry(country, orgs, npos) {

    div = document.createElement('div');
    if (country.clh) {
        div.className = "card blue-grey lighten-5";
    } else {
        div.className = "card amber lighten-5";
    }
    document.getElementById('result_container').appendChild(div);

    content = document.createElement('div');
    content.className = 'card-content';
    div.appendChild(content);

    // MAIN
    content.innerHTML = Jaml.render('country', country);

    // WARNINGS
    if (country.warnings) {
        content.insertAdjacentHTML('beforeend', '<span class="card-title italic">Avertissements</span>');
        country.warnings.forEach(function (warning) {
            content.insertAdjacentHTML('beforeend', Jaml.render('warning', warning));
        });
    }

    // COMMENTS
    if (country.comments) {
        content.insertAdjacentHTML('beforeend', '<span class="card-title italic">Informations</span>');
        country.comments.forEach(function (comment) {
            content.insertAdjacentHTML('beforeend', Jaml.render('comment', comment));
        });
    }

    // STATS
    if (country.stats) {
        content.insertAdjacentHTML('beforeend', '<span class="card-title italic">Statistiques</span>');
        stats = document.createElement('ul');
        stats.className = 'statistics';
        content.appendChild(stats);
        var previous = undefined;
        country.stats.forEach(function(stat){
            if (previous) {
                stat.delta = (stat.count > previous.count) ? '↗' : (stat.count < previous.count) ? '↘' : previous.delta;
                if (stat.delta == undefined) stat.delta = '=';
                stats.insertAdjacentHTML('beforeend', Jaml.render('stat', stat));
            }
            previous = stat;
        });
    }


    // ORGS 
    orgsDiv = document.createElement('div');
    content.appendChild(orgsDiv);
    orgsDiv.className = "row";

    oaasDiv = document.createElement('div');
    orgsDiv.appendChild(oaasDiv);
    oaasDiv.className = "col l6 m12";

    // OAA chips
    oaasDiv.insertAdjacentHTML('beforeend', '<span class="card-title italic">Organismes Agréés pour l\'Adoption</span>');
    orgsBar = document.createElement('div');
    orgsBar.style = "padding : 0px 16px";
    oaasDiv.appendChild(orgsBar);
    orgs.forEach(function(org) {
        orgsBar.insertAdjacentHTML('beforeend', Jaml.render('org', org));
    });

    // APPO chips
    console.log(npos);
    if (npos.length > 0) {
        apposDiv = document.createElement('div');
        orgsDiv.appendChild(apposDiv);
        apposDiv.className = "col l6 m12";

        apposDiv.insertAdjacentHTML('beforeend', '<span class="card-title italic">Associations par Pays d\'Origine</span>');
        apposBar = document.createElement('div');
        apposBar.style = "padding : 0px 16px";
        apposDiv.appendChild(apposBar);
        npos.forEach(function(appo) {
            apposBar.insertAdjacentHTML('beforeend', Jaml.render('org', appo));
        });
    }
}

function verifyConstraints(constraints) {
    // Check status
    if (constraints.status) {
        if (constraints.status.indexOf(status) == -1) {
            return false;
        }
    }

    // Check marriage duration
    if (constraints.marriage && status == 'married_couple') {
        if (constraints.marriage.min && marriage_duration < constraints.marriage.min) {
            return false;
        }
    }

    // Check age
    var const_age = undefined;
    if (constraints.age){
        const_age = constraints.age;
    } else if (constraints.age_married_couple && status == 'married_couple') {
        const_age = constraints.age_married_couple;
    } else if (constraints.age_single_woman && status == 'single_woman') {
        const_age = constraints.age_single_woman;
    } else if (constraints.age_single_man && status == 'single_man') {
        const_age = constraints.age_single_man;
    }

    if (const_age) {
        if (const_age.at_least_one_min && age_max < const_age.at_least_one_min) {
            return false;
        }
        if (const_age.min && age_min < const_age.min) {
            return false;
        }
        if (const_age.max && age_max > const_age.max) {
            return false;
        }
    }

    // Check age_gap (which implies a min/max age
    if (constraints.age_gap){
        if (constraints.age_gap.at_least_one_min && age_max < constraints.age_gap.at_least_one_min) {
            return false;
        }
        if (constraints.age_gap.min && age_min < constraints.age_gap.min) {
            return false;
        }
        if (constraints.age_gap.max && age_max > (constraints.age_gap.max + 18)) {
            return false;
        }
    }

    return true;
}

function switchAgeRow() {
    var selectedStatus = document.getElementById('status').value;
    if (selectedStatus == 'married_couple'){
        document.getElementById('age_spouse_block').className = "col s6";
        document.getElementById('marriage_duration_block').className = "col s6 range-field";
    } else {
        document.getElementById('age_spouse_block').className = "col s6 hide";
        document.getElementById('marriage_duration_block').className = "col s6 range-field hide";
    }
}


function updateMarriedTip() {

	var label = document.getElementById('marriage_duration_tip');
	var range = document.getElementById('marriage_duration');

    label.innerHTML = "depuis <strong>" + range.value + "</strong> ans";
}
function updateAgeTip() {

	var label = document.getElementById('age_tip');
	var range = document.getElementById('age');

    label.innerHTML = "Vous avez <strong>" + range.value + "</strong> ans";
}
function updateAgeSpouseTip() {

	var label = document.getElementById('age_spouse_tip');
	var range = document.getElementById('age_spouse');

    label.innerHTML = "et <strong>" + range.value + "</strong> ans";
}

function updateAgeChildTips(max_rules = true) {

	var labelMin = document.getElementById('age_child_min_tip');
	var labelMax = document.getElementById('age_child_max_tip');
	var rangeMin = document.getElementById('age_child_min');
	var rangeMax = document.getElementById('age_child_max');

	var min = parseInt(rangeMin.value);
	var max = parseInt(rangeMax.value);

	if (min >= max) {
		if (max_rules && min > 0) {
			rangeMin.value = max - 1
		} else if ((!max_rules) && max < 18) {
			rangeMax.value = min + 1
		}
	}

    labelMin.innerHTML = "Entre <strong>" + rangeMin.value + "</strong> …";
	labelMax.innerHTML = "… et <strong>" + rangeMax.value + "</strong> ans";
}
