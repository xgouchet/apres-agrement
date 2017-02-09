
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
                {href:country.url, style:'width:48px; text-align:right;'},
                em({cls:'material-icons',style:'font-size:20px', title:"Voir la fiche pays"}, 'open_in_new')
            )
        );
    });

    Jaml.register('org', function(org) {
        span({cls:'chip blue darken-3'},
            a({cls:'white-text', href : org.url, target:'_blank'},org.name)
        );
    });

    Jaml.register('warning', function(warning) {
        p({cls:'red-text text-darken-4 warning'}, warning);
    });
    Jaml.register('comment', function(comment) {
        p({cls:'comment'}, em(comment));
    });

    Jaml.register('stat', function(stat) {
        li(strong('' + stat.year), ' : ' + stat.count);
    });

    countries.forEach(processCountry);
}

function processCountry(country) {

    var allowed = true;
    var orgs = [];
    if (country.constraints) {
        // TODO check constraints
    }
    orgs = organizations.filter(function(org){
        if (org.countries.indexOf(country.code) < 0) {
            //return false;
        }
        if (org.counties.indexOf(county) < 0) {
            return county == "all";
        }
        return true;
    });

    var region_allowed = (getParamByName('region_' + country.region) == 'on');

    if (allowed && (orgs.length > 0) && region_allowed) {

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

        // Main content
        content.innerHTML = Jaml.render('country', country);

        // Warnings
        if (country.warnings) {
            country.warnings.forEach(function (warning) {
                content.insertAdjacentHTML('beforeend', Jaml.render('warning', warning));
            });
        }

        // Comments
        if (country.comments) {
            country.comments.forEach(function (comment) {
                content.insertAdjacentHTML('beforeend', Jaml.render('comment', comment));
            });
        }

        // OAA chips
        content.insertAdjacentHTML('beforeend', '<span class="card-title italic">Organismes Agréés pour l\'Adoption</span>');
        orgsBar = document.createElement('div');
        content.appendChild(orgsBar);
        orgs.forEach(function(org) {
            orgsBar.insertAdjacentHTML('beforeend', Jaml.render('org', org));
        });

        // Stats
        if (country.stats) {
            content.insertAdjacentHTML('beforeend', '<span class="card-title italic">Statistiques</span>');
            stats = document.createElement('ul');
            stats.className = 'statistics';
            content.appendChild(stats);
            country.stats.forEach(function(stat){
                stats.insertAdjacentHTML('beforeend', Jaml.render('stat', stat));
            });
        }
    }
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

    label.innerHTML = "depuis " + range.value + " ans";
}
function updateAgeTip() {

	var label = document.getElementById('age_tip');
	var range = document.getElementById('age');

    label.innerHTML = "Vous avez " + range.value + " ans";
}
function updateAgeSpouseTip() {

	var label = document.getElementById('age_spouse_tip');
	var range = document.getElementById('age_spouse');

    label.innerHTML = "et " + range.value + " ans";
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

    labelMin.innerHTML = "Entre " + rangeMin.value + " …";
	labelMax.innerHTML = "… et " + rangeMax.value + " ans";
}
