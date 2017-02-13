// TODO add countries allowing individual procedures
// TODO add the adaptation period duration
// TODO add financial data ?
var countries = [
    {
        'name' : 'Afrique du Sud',
        'code' : 'ZA',
        'region' : 'africa',
        'clh' : { 'signed' : 2003, 'applied' : 2003 }, 
        'url' : 'adopter-en-afrique-du-sud',
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 18'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 9 },
            { 'year' : 2013, 'count' : 4 },
            { 'year' : 2014, 'count' : 7 },
            { 'year' : 2015, 'count' : 5 },
            { 'year' : 2016, 'count' : 3 }
        ]
    },
    {
        'name' : 'Albanie',
        'code' : 'AL',
        'region' : 'europe',
        'clh' : { 'signed' : 2000, 'applied' : 2001 },
        'url' : 'adopter-en-albanie',
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 18'
            }
        ],
        'warnings' : [
            "Avertissement : L’adoption internationale en Albanie est légalement possible, toutefois : l’adoption internationale est subsidiaire; les enfants adoptables y sont très peu nombreux; les enfants proposés à l’adoption internationale sont généralement âgés de plus de 8 ans ou issus de fratries. Dans ces conditions, une procédure d’adoption menée dans ce pays peut être longue, difficile et sans garantie quant à son aboutissement."
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 4 },
            { 'year' : 2013, 'count' : 3 },
            { 'year' : 2014, 'count' : 2 },
            { 'year' : 2015, 'count' : 1 },
            { 'year' : 2016, 'count' : 1 }
        ]
    },
    {
        'name' : 'Argentine',
        'code' : 'AR',
        'region' : 'latam',
        'url' : 'adopter-en-argentine',
	    'warnings' : [
		    "Les candidats doivent résider en Argentine depuis au moins 5 ans avant de pouvoir effectuer la demande d'adoption. Le jugement d'adoption ne peut être rendu qu'après une période de garde provisoire de 6 mois à 1 an, qui doit obligatoirement avoir lieu en Argentine."
        ]
    },
    {
        'name' : 'Arménie',
        'code' : 'AM',
        'region' : 'europe',
        'clh' : { 'signed' : 2007, 'applied' : 2007 },
        'url' : 'adopter-en-armenie',
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 18'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 14 },
            { 'year' : 2013, 'count' : 15 },
            { 'year' : 2014, 'count' : 7 },
            { 'year' : 2015, 'count' : 15 },
            { 'year' : 2016, 'count' : 7 }
        ]
    },
    {
        'name' : 'Azerbaidjan',
        'code' : 'AZ',
        'region' : 'europe',
        'clh' : { 'signed' : 2004, 'applied' : 2004 },
        'url' : 'adopter-en-azerbaidjan',
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            }
        ],
        'warnings' : [
            "Avertissement : L’adoption internationale en Azerbaïdjan est légalement possible, toutefois : les enfants adoptables y sont très peu nombreux; les autorités privilégient, en règle générale, les candidats ayant un lien familial avec le pays. Dans ces conditions, une procédure d’adoption menée dans ce pays peut être longue, difficile et sans garantie quant à son aboutissement."
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 0 },
            { 'year' : 2013, 'count' : 1 },
            { 'year' : 2014, 'count' : 0 },
            { 'year' : 2015, 'count' : 0 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'Bénin',
        'code' : 'BJ',
        'region' : 'africa',
        'url' : 'adopter-au-benin',
	    'warnings' : [
		    "Le Bénin a informé la MAI de sa décision de suspendre les procédures d'adoption internationale en attendant la mise en place d'une autorité centrale et l'accréditation d'organismes autorisés pour l'adoption. (27/05/2014)"
        ],
	    'comments' : [
		    "Le Bénin n'accepte pas la candidature de personnes ayant déjà des enfants biologiques. L’existence d’enfants adoptés ne fait pas obstacle à l’adoption."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
	        {
                'type' : 'marriage',
                'value' : 'min 5'
            },
            {
                'type' : 'age',
                'value' : 'at least one min 35'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ]
    },
    {
        'name' : 'Bielorussie',
        'code' : 'BY',
        'region' : 'europe',
        'clh' : { 'signed' : 1997, 'applied' : 2003 },
        'url' : 'adopter-en-bielorussie',
	    'warnings' : [
	    	"Pour des raisons internes au pays, l'adoption internationale, bien que légalement autorisée, est inexistante depuis le mois d'octobre 2004. Aucun opérateur français n'est accrédité en Biélorussie."
        ]
    },
    {
        'name' : 'Birmanie',
        'code' : 'MM',
        'region' : 'asia',
        'url' : 'adopter-en-birmanie',
    	'warnings' : [
	    	"Pour des raisons internes au pays, l'adoption d'enfants birmans par des étrangers est suspendue depuis 1996."
        ]
    },
    {
        'name' : 'Bolivie',
        'code' : 'BO',
        'region' : 'latam',
        'clh' : { 'signed' : 2000, 'applied' : 2002 },
        'url' : 'adopter-en-bolivie',
	    'comments' : [
		    "Les adoptants doivent être en bonne santé physique et mentale et ne pas avoir d'antécédents judiciaires."
        ],
    	'warnings' : [
	    	"Les célibataires sont acceptés. Néanmoins dans la pratique, ils ont peu de chance de bénéficier d’un apparentement."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
	        {
                'type' : 'marriage',
                'value' : 'before child birth'
            },
            {
                'type' : 'age',
                'value' : 'min 25 max 50'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ]
    },
    {
        'name' : 'Bosnie-Herzégovine',
        'code' : 'BA',
        'region' : 'europe',
        'url' : 'adopter-en-bosnie',
    	'warnings' : [
	    	"Aux termes de la loi bosnienne, l’adoption est réservée aux ressortissants de Bosnie-Herzégovine. Néanmoins, il existe deux exceptions : l’adoption par un Français d’origine bosnienne; l’adoption de l’enfant du conjoint d’origine bosnienne."
        ]
    },
    {
        'name' : 'Brésil',
        'code' : 'BR',
        'region' : 'latam',
        'clh' : { 'signed' : 1993, 'applied' : 1999 },
        'url' : 'adopter-au-bresil',
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'age',
                'value' : 'min 18'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 16'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 13 },
            { 'year' : 2013, 'count' : 15 },
            { 'year' : 2014, 'count' : 15 },
            { 'year' : 2015, 'count' : 20 },
            { 'year' : 2016, 'count' : 9 }
        ]
    },
    {
        'name' : 'Bulgarie',
        'code' : 'BG',
        'region' : 'europe',
        'clh' : { 'signed' : 1993, 'applied' : 2002 },
        'url' : 'adopter-en-bulgarie',
        'comments' : [
            "Les candidatures d'hommes célibataires peuvent être acceptées en fonction du projet, du profil de l'enfant et seulement s'il y a une présence féminine au quotidien."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'age_gap',
                'value' : 'at least one min 15'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 34 },
            { 'year' : 2013, 'count' : 49 },
            { 'year' : 2014, 'count' : 46 },
            { 'year' : 2015, 'count' : 19 },
            { 'year' : 2016, 'count' : 38 }
        ]
    },
    {
        'name' : 'Burkina Faso',
        'code' : 'BF',
        'region' : 'africa',
        'clh' : { 'signed' : 1994, 'applied' : 1996 },
        'url' : 'adopter-au-burkina-faso',
        'comments' : [
            "Pour l'adoption des enfants à besoins spécifiques (enfants âgés de 6 ans, ou porteur d'un handicap, ou atteint de maladie incurable) : les adoptants sont dispensés des critères définis à l'article 5 (durée de mariage, condition d'âge, écart d'âge avec l'enfant).",
            "Les postulants ne doivent pas avoir plus d’un enfant (biologique ou adopté)."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'marriage',
                'value' : 'min 5'
            },
            {
                'type' : 'age',
                'value' : 'at least one min 30 max 55'
            },
            {
                'type' : 'age_gap',
                'value' : 'at least one min 15'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 20 },
            { 'year' : 2013, 'count' : 14 },
            { 'year' : 2014, 'count' : 21 },
            { 'year' : 2015, 'count' : 16 },
            { 'year' : 2016, 'count' : 16 }
        ]
    },
    {
        'name' : 'Burundi',
        'code' : 'BI',
        'region' : 'africa',
        'clh' : { 'signed' : 1998, 'applied' : 1999 },
        'url' : 'adopter-au-burundi',
        'comments' : [
            "Pour l'adoption des enfants à besoins spécifiques (enfants âgés de 6 ans, ou porteur d'un handicap, ou atteint de maladie incurable) : les adoptants sont dispensés des critères définis à l'article 5 (durée de mariage, condition d'âge, écart d'âge avec l'enfant).",
            "Les postulants ne doivent pas avoir plus d’un enfant (biologique ou adopté)."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'marriage',
                'value' : 'min 5'
            },
            {
                'type' : 'age',
                'value' : 'at least one min 30'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 3 },
            { 'year' : 2013, 'count' : 1 },
            { 'year' : 2014, 'count' : 1 },
            { 'year' : 2015, 'count' : 1 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'Cambodge',
        'code' : 'KH',
        'region' : 'asia',
        'clh' : { 'signed' : 2007, 'applied' : 2007 },
        'url' : 'adopter-au-cambodge',
        'warnings' : [
            "Les adoptions sont suspendues au Cambodge depuis 2013."
        ]
    },
    {
        'name' : 'Cameroun',
        'code' : 'CM',
        'region' : 'africa',
        'url' : 'adopter-au-cameroun',
        'warnings' : [
            "Les démarches individuelles sont suspendues. Seules les démarches d'adoption intrafamilliale pour lesquelles un jugement a été prononcé avant le 1er octobre 2015 sont possibles."
        ],
        'comments' : [
            "La présence d’enfants biologiques au foyer des candidats fait obstacle à l’adoption au Cameroun. Ceci ne concerne pas les enfants déjà adoptés par les candidats à l’adoption.",
            "La priorité est réservée aux couples stériles."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'marriage',
                'value' : 'min 10'
            },
            {
                'type' : 'age',
                'value' : 'at least one min 35'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 30 },
            { 'year' : 2013, 'count' : 22 },
            { 'year' : 2014, 'count' : 32 },
            { 'year' : 2015, 'count' : 21 },
            { 'year' : 2016, 'count' : 19 }
        ]
    },
    {
        'name' : 'Cap Vert',
        'code' : 'CV',
        'region' : 'africa',
        'clh' : { 'signed' : 2009, 'applied' : 2010 },
        'url' : 'adopter-au-cap-vert',
        'warnings' : [
            "Les autorités locales n’ayant pas encore terminé la mise en place du cadre institutionnel et procédural conforme aux principes de la Convention, la transmission des nouveaux dossiers de candidature à destination des autorités centrales pour l’adoption au Cap Vert est suspendue."
        ],
        'comments' : [
            "Si les candidats à l’adoption ont déjà des enfants de plus de 12 ans, ces derniers devront donner leur consentement au projet d’adoption de lnsei parents.",
            "Les adoptants doivent jouir pleinement de leurs droits civils et politiques, et être en mesure de satisfaire aux besoins économiques de l’adopté et offrir les garanties morales nécessaires pour l’éduquer."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'age',
                'value' : 'min 25 max 60'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 16 max 40'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 12 },
            { 'year' : 2013, 'count' : 8 },
            { 'year' : 2014, 'count' : 7 },
            { 'year' : 2015, 'count' : 0 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'Chili',
        'code' : 'CL',
        'region' : 'latam',
        'clh' : { 'signed' : 1999, 'applied' : 1999 },
        'url' : 'adopter-au-chili',
        'comments' : [
            "Très peu d’enfants chiliens sont confiés à l’adoption internationale et l’adoption d’enfants jeunes (moins de 3 ans) s’avère très difficile, ceux-ci étant prioritairement proposés à l’adoption nationale. Pour les enfants de plus de 3 ans, le délai d’attente pour une attribution d’enfant peut aller de 6 à 18 mois."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'marriage',
                'value' : 'min 2'
            },
            {
                'type' : 'age',
                'value' : 'min 25 max 60'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 20'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 22 },
            { 'year' : 2013, 'count' : 4 },
            { 'year' : 2014, 'count' : 12 },
            { 'year' : 2015, 'count' : 8 },
            { 'year' : 2016, 'count' : 18 }
        ]
    },
    {
        'name' : 'Chine',
        'code' : 'CN',
        'region' : 'asia',
        'clh' : { 'signed' : 2000, 'applied' : 2006 },
        'url' : 'adopter-en-chine',
        'comments' : [
            "S'il s'agit d'un deuxième marriage, la durée de mariage nécessaire est de 5 ans.",
            "Les candidats à l'adoptions ne doivent pas être porteur de maladie ni de handicap sérieux, doivent disposer d'un seuil minimum de ressource équivalent à 30 000$ annuels, être propriétaire d'un bien immobilier, avec un patrimoine (maison, voiture, épargne, ...) de 80 000$."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_woman'
            },
            {
                'type' : 'marriage',
                'value' : 'min 2'
            },
            {
                'type' : 'age',
                'value' : 'min 30'
            },
            {
                'type' : 'age_gap_single_woman',
                'value' : 'max 45'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 63 },
            { 'year' : 2012, 'count' : 63 },
            { 'year' : 2013, 'count' : 99 },
            { 'year' : 2014, 'count' : 71 },
            { 'year' : 2015, 'count' : 48 },
            { 'year' : 2016, 'count' : 28 }
        ]
    },
    {
        'name' : 'Colombie',
        'code' : 'CO',
        'region' : 'latam',
        'clh' : { 'signed' : 1993, 'applied' : 1998 },
        'url' : 'adopter-en-colombie',
        'comments' : [
            "L’ICBF, autorité centrale colombienne, a pris la décision de suspendre l’enregistrement, à compter du 15 juillet 2013, de toute nouvelle candidature à l’adoption d’enfants de 0 à 6 ans et 11 mois, pour une durée d’au moins deux ans, le temps d’épurer la liste d’attente de familles déjà enregistrées auprès de ses services. Cette suspension concerne également les projets d’adoption de deux enfants dont l’aîné serait âgé de moins de 6 ans et 11 mois. (12/6/2015)",
            "Les célibataires sont acceptés, mais en pratique seulement pour des enfants grands. Pour les autorités colombiennes l’adoption par une personne célibataire en situation de concubinage est « préjudiciable aux intérêts du mineur ». Seuls les dossiers présentés par une personne vivant seule ou par un couple marié peuvent donc être communiqués aux autorités colombiennes."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_woman single_man'
            },
            {
                'type' : 'age',
                'value' : 'min 25'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 159 },
            { 'year' : 2013, 'count' : 84 },
            { 'year' : 2014, 'count' : 56 },
            { 'year' : 2015, 'count' : 75 },
            { 'year' : 2016, 'count' : 62 }
        ]
    },
    {
        'name' : 'Congo (Brazzaville)',
        'code' : 'CG',
        'region' : 'africa',
        'clh' : { 'signed' : 1993, 'applied' : 1998 },
        'url' : 'adopter-au-congo-brazzaville',
        'comments' : [
            "Sauf dispense du Ministre de la Justice congolais, la présence d’enfants biologiques au foyer des adoptants fait obstacle à l’adoption. En revanche, la présence d’enfants adoptés antérieurement est tolérée."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_woman'
            },
            {
                'type' : 'marriage',
                'value' : 'min 5'
            },
            {
                'type' : 'age_married',
                'value' : 'at least one min 30'
            },
            {
                'type' : 'age_single_womane',
                'value' : 'min 35'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 20'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 17 },
            { 'year' : 2013, 'count' : 19 },
            { 'year' : 2014, 'count' : 23 },
            { 'year' : 2015, 'count' : 23 },
            { 'year' : 2016, 'count' : 21 }
        ]
    },
    {
        'name' : 'Congo (République démocratique)',
        'code' : 'CD',
        'region' : 'africa',
        'clh' : { 'signed' : 1993, 'applied' : 1998 },
        'url' : 'adopter-au-congo-republique-democratique',
        'warnings' : [
            "Suspension des adoptions internationales en RDC à compter du 1er janvier 2017 (29/11/2016)."
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 84 },
            { 'year' : 2013, 'count' : 62 },
            { 'year' : 2014, 'count' : 2 },
            { 'year' : 2015, 'count' : 13 },
            { 'year' : 2016, 'count' : 231 }
        ]
    },
    {
        'name' : 'Corée du Sud',
        'code' : 'KR',
        'region' : 'asia',
        'clh' : { 'signed' : 2013, 'applied' : '?' },
        'url' : 'adopter-en-coree-du-sud',
        'comments' : [
            "Dans la pratique, la différence d’âge entre les deux membres du couple devra être au maximum de 10 ans.",
            "En pratique, les candidatures de familles ayant déjà 4 enfants (biologiques ou adoptés) ne sont pas acceptées et les couples sans enfant sont choisis en priorité. Toutefois, les couples sans enfants au foyer ne doivent pas être mariés depuis plus de 12 ans.",
            "Les adoptants doivent disposer de ressources financières suffisantes et pouvoir garantir à l’enfant la liberté de religion et une éducation appropriée, et ne doivent pas être atteints d’un handicap physique." 
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'marriage',
                'value' : 'min 3'
            },
            {
                'type' : 'age',
                'value' : 'min 25 max 45'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 4 },
            { 'year' : 2013, 'count' : 2 },
            { 'year' : 2014, 'count' : 3 },
            { 'year' : 2015, 'count' : 1 },
            { 'year' : 2016, 'count' : 2 }
        ]
    },
    {
        'name' : 'Costa Rica',
        'code' : 'CR',
        'region' : 'latam',
        'clh' : { 'signed' : 1993, 'applied' : 1996 },
        'url' : 'adopter-au-costa-rica',
        'warnings' : [
            "Les enfants proposés exceptionnellement à l’adoption internationale sont, dans la grande majorité des cas, des enfants de plus de 5 ans, des enfants à besoins spécifiques ou des fratries."
        ]
    },
    {
        'name' : 'Côte d\'Ivoire',
        'code' : 'CI',
        'region' : 'latam',
        'clh' : { 'signed' : 2015, 'applied' : 2015 },
        'url' : 'adopter-en-cote-d-ivoire',
        'warnings' : [
            "Le 11 mai 2016, le Conseil des Ministres ivoirien a décidé la suspension de l’enregistrement de nouveaux dossiers d’adoption internationale dans l’attente de la mise en œuvre de la Convention de la Haye."
        ],
        'comments' : [
            "Les candidats sans enfant ou stériles sont prioritaires."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_woman single_man'
            },
            {
                'type' : 'marriage',
                'value' : 'min 5'
            },
            {
                'type' : 'age',
                'value' : 'at least one min 30'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 34 },
            { 'year' : 2013, 'count' : 49 },
            { 'year' : 2014, 'count' : 45 },
            { 'year' : 2015, 'count' : 62 },
            { 'year' : 2016, 'count' : 43 }
        ]
    },
    {
        'name' : 'Cuba',
        'code' : 'CU',
        'region' : 'latam',
        'clh' : { 'signed' : 2007, 'applied' : 2007 },
        'url' : 'adopter-a-cuba',
        'warnings' : [
            "Il est très difficile d’adopter à CUBA. Les quelques dossiers initiés n’ont pas abouti. PAYS A DECONSEILLER."
        ]
    },
    {
        'name' : 'Djibouti',
        'code' : 'DJ',
        'region' : 'africa',
        'url' : 'adopter-en-cote-d-ivoire',
        'warnings' : [
            "Le code Djiboutien de la famille interdit l'adoption internationale."
        ]
    },
    {
        'name' : 'Dominique',
        'code' : 'DM',
        'region' : 'latam',
        'url' : 'adopter-en-dominique',
        'warnings' : [
            "La Mission de l’Adoption internationale a décidé en 2016 de suspendre toutes les adoptions internationales dans ce pays."
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 5 },
            { 'year' : 2013, 'count' : 1 },
            { 'year' : 2014, 'count' : 3 },
            { 'year' : 2015, 'count' : 4 },
            { 'year' : 2016, 'count' : 8 }
        ]
    },
    {
        'name' : 'Équateur',
        'code' : 'EC',
        'region' : 'latam',
        'clh' : { 'signed' : 1994, 'applied' : 1996 },
        'url' : 'adopter-en-equateur',
        'warnings' : [
            "Aucun OAA n'est acrédité en Équateur"
        ]
    },
    {
        'name' : 'États-Unis',
        'code' : 'US',
        'region' : 'latam',
        'clh' : { 'signed' : 1994, 'applied' : 2008 },
        'url' : 'adopter-aux-etats-unis',
        'comments' : [
            "Les critères d’éligibilité varient selon chaque Etat. Les informations détaillées relatives aux personnes, institutions et autorités dont le consentement est requis pour une adoption sont définies par la législation des Etats : âge des adoptants, situation matrimoniale etc… ",
            "Une bonne pratique de la langue anglaise est requise : les juges et les travailleurs sociaux y accordent une grande importance."
        ]
    },
    {
        'name' : 'Ethiopie',
        'code' : 'ET',
        'region' : 'africa',
        'url' : 'adopter-en-ethiopie',
        'warnings' : [
            "A l’échelle nationale, l’Ethiopie devient de moins en moins favorable à l’adoption internationale. Cette tendance est particulièrement perceptible dans certaines régions du sud du pays. Cela se traduit par une forte inertie administrative au même moment où la décentralisation dans les régions des questions relatives à la protection de l’enfance ralentit également les procédures."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'age',
                'value' : 'at least one min 25'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 220 },
            { 'year' : 2013, 'count' : 140 },
            { 'year' : 2014, 'count' : 52 },
            { 'year' : 2015, 'count' : 24 },
            { 'year' : 2016, 'count' : 10 }
        ]
    },
    {
        'name' : 'Gabon',
        'code' : 'GA',
        'region' : 'africa',
        'url' : 'adopter-au-gabon',
        'comments' : [
            "L’adoption n’est permise qu’en l’absence de descendants biologiques. L’existence d’enfants adoptés ne fait pas obstacle à l’adoption, non plus que celle d’enfants biologiques nés postérieurement à l’accueil de l’enfant adopté au foyer des adoptants."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'marriage',
                'value' : 'min 5'
            },
            {
                'type' : 'age_married',
                'value' : 'at least one min 30'
            },
            {
                'type' : 'age_single',
                'value' : 'min 35'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 3 },
            { 'year' : 2013, 'count' : 9 },
            { 'year' : 2014, 'count' : 3 },
            { 'year' : 2015, 'count' : 3 },
            { 'year' : 2016, 'count' : 2 }
        ]
    },
    {
        'name' : 'Géorgie',
        'code' : 'GE',
        'region' : 'asia',
        'clh' : { 'signed' : 1999, 'applied' : 1999 },
        'url' : 'adopter-en-georgie',
        'comments' : [
            "Compte-tenu des difficultés importantes rencontrées dans l’application de la Convention de La Haye du 29 mai 1993 sur la protection des enfants et la coopération en matière d’adoption internationale, l’attention des candidats est attirée sur le fait qu’une démarche dans ce pays pourrait s’avérer longue, difficile et sans garantie quant à son aboutissement."
        ]
    },
    {
        'name' : 'Ghana',
        'code' : 'GH',
        'region' : 'africa',
        'clh' : { 'signed' : 2016, 'applied' : 2017 },
        'url' : 'adopter-au-ghana',
        'warnings' : [
            "Le Ghana a ratifié la convention le 16 septembre 2016 et celle-ci est entrée en vigueur le 1er janvier 2017. Néanmoins, cet Etat n’ayant pas encore mis en œuvre les mécanismes opérationnels prévus par cette convention, les procédures d’adoption internationale, y compris d’adoption intrafamiliale, demeurent suspendues au Ghana sine die. (25/01/2017)"
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 1 },
            { 'year' : 2013, 'count' : 3 },
            { 'year' : 2014, 'count' : 0 },
            { 'year' : 2015, 'count' : 1 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'Guatemala',
        'code' : 'GT',
        'region' : 'latam',
        'clh' : { 'signed' : 2002, 'applied' : 2003 },
        'url' : 'adopter-au-guatemala',
        'warnings' : [
            "La France a décidé, en 2003, de suspendre les adoptions au Guatemala, jusqu''à ce que des mesures conformes aux dispositions de la convention de La Haye soient mises en oeuvre par les autorités guatémaltèques."
        ]
    },
    {
        'name' : 'Guinée',
        'code' : 'GN',
        'region' : 'africa',
        'clh' : { 'signed' : 2003, 'applied' : 2004 },
        'url' : 'adopter-en-guinee',
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'marriage',
                'value' : 'min 5'
            },
            {
                'type' : 'age_single',
                'value' : 'min 30'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 36 },
            { 'year' : 2013, 'count' : 31 },
            { 'year' : 2014, 'count' : 4 },
            { 'year' : 2015, 'count' : 4 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'Haiti',
        'code' : 'HT',
        'region' : 'latam',
        'clh' : { 'signed' : 2012, 'applied' : 2014 },
        'url' : 'adopter-en-haiti',
        'comments' : [
            "Si l’adoptant a déjà des enfants biologiques ou adoptés de 8 ans et plus, ces derniers doivent donner leur avis sur le projet d’adoption."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'  
            },
            {
                'type' : 'marriage',
                'value' : 'min 5'
            },
            {
                'type' : 'age',
                'value' : 'at least one min 30 max 50'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 14'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 49 },
            { 'year' : 2013, 'count' : 31 },
            { 'year' : 2014, 'count' : 23 },
            { 'year' : 2015, 'count' : 48 },
            { 'year' : 2016, 'count' : 82 }
        ]
    },
    {
        'name' : 'Honduras',
        'code' : 'HN',
        'region' : 'latam',
        'url' : 'adopter-au-honduras',
        'warnings' : [
            "Les adoptions nationales et internationales sont très peu nombreuses. Pays à déconseiller."
        ],
        'comments' : [
            "les adoptants doivent jouir de leurs droits civiques. Ils doivent être de bonne moralité et de bonne réputation et prouver qu’ils ont la capacité d’éduquer et de pourvoir aux besoins de l’adopté."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'  
            },
            {
                'type' : 'marriage',
                'value' : 'min 3'
            },
            {
                'type' : 'age',
                'value' : '25 max 50'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 0 },
            { 'year' : 2013, 'count' : 0 },
            { 'year' : 2014, 'count' : 2 },
            { 'year' : 2015, 'count' : 1 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'Hongrie',
        'code' : 'HU',
        'region' : 'europe',
        'clh' : { 'signed' : 2004, 'applied' : 2005 },
        'url' : 'adopter-en-hongrie',
        'comments' : [
            "Les projets d’adoption suivants seront traités prioritairement par les autorités hongroises : <br/> - Demande d’adoption d’un enfant de moins de 7 ans présentant des problèmes importants de santé physique et/ou mentale et/ou des troubles du comportement<br/> - Demande d’adoption d’enfants de plus de 10 ans ou pour des fratries de 3 enfants ou plus, même de moins de 7 ans.<br/> - Demande d’adoption par des candidats hongrois ou des couples franco-hongrois résidant en France avec un projet pour un enfant âgé jusqu’à 5 ans révolus.",
            "L’adoption est ouverte aux personnes célibataires mais une priorité est accordée par les autorités hongroises aux couples mariés "
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'  
            },
            {
                'type' : 'age_gap',
                'value' : 'min 16 max 45'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 1 },
            { 'year' : 2013, 'count' : 0 },
            { 'year' : 2014, 'count' : 3 },
            { 'year' : 2015, 'count' : 0 },
            { 'year' : 2016, 'count' : 3 }
        ]
    },
    {
        'name' : 'Inde',
        'code' : 'IN',
        'region' : 'asia',
        'clh' : { 'signed' : 2003, 'applied' : 2003 },
        'url' : 'adopter-en-inde',
        'comments' : [
            "Les candidats à l’adoption doivent être physiquement, mentalement et affectivement stables, financièrement capables, motivés pour adopter un enfant et ne pas présenter un état de santé qui mette en danger la vie d’autrui ",
            "Un homme célibataire ne peut adopter d’enfant du sexe féminin.",
            "les demandes d’adoption émanant de couples ayant plus de quatre enfants ne seront pas prises en considération.",
            "Les candidats à l’adoption qui souhaitent adopter un enfant à besoins spécifiques sont prioritaires."
            // TODO Table of cumulated age ?
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'  
            },
            {
                'type' : 'marriage',
                'value' : 'min 2'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 25'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 14 },
            { 'year' : 2013, 'count' : 20 },
            { 'year' : 2014, 'count' : 13 },
            { 'year' : 2015, 'count' : 9 },
            { 'year' : 2016, 'count' : 31 }
        ]
    },
    {
        'name' : 'Indonésie',
        'code' : 'RI',
        'region' : 'asia',
        'url' : 'adopter-en-indonesie',
        'comments' : [
            "Les postulants doivent travailler et séjourner légalement en Indonésie depuis au moins deux années consécutives attestées par un document officiel.",
            "L'adoption est précédée d'une période de placement probatoire de l’enfant de six mois, sous le contrôle des services locaux du ministère des Affaires sociales.", 
            "Les candidats doivent être de la même relifion que l'enfant (Islam 87%, Protestantisme 7%, Catholicisme 3%)."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'  
            },
            {
                'type' : 'marriage',
                'value' : 'min 5'
            },
            {
                'type' : 'age',
                'value' : 'min 30 max 45'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 1 },
            { 'year' : 2013, 'count' : 1 },
            { 'year' : 2014, 'count' : 0 },
            { 'year' : 2015, 'count' : 0 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'Kazakhstan',
        'code' : 'KZ',
        'region' : 'europe',
        'clh' : { 'signed' : 2010, 'applied' : 2010 },
        'url' : 'adopter-au-kazakhstan',
        'warnings' : [
            "Selon les autorités kazakhes, beaucoup d’enfants proposés à l’adoption internationale ont un handicap parfois lourd.",
            "les candidatures de célibataires femmes ne seraient, en pratique, plus acceptées.",
            "Ne peuvent adopter les personnes « qui professent une orientation sexuelle non traditionnelle» (article 91 du nouveau Code du mariage et de la famille)."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_woman'  
            },
            {
                'type' : 'age_gap',
                'value' : 'min 16 max 45'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 0 },
            { 'year' : 2013, 'count' : 3 },
            { 'year' : 2014, 'count' : 6 },
            { 'year' : 2015, 'count' : 6 },
            { 'year' : 2016, 'count' : 7 }
        ]
    },
    {
        'name' : 'Kosovo',
        'code' : 'XK',
        'region' : 'europe',
        'url' : 'adopter-au-kosovo',
        'warnings' : [
            "Attention : Les ressortissants non-kosovars doivent obtenir l’accord préalable de l’organe kosovar en charge des affaires de la santé et de la politique sociale."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_woman single_man'  
            },
            {
                'type' : 'age_married',
                'value' : 'at least one min 25'
            },
            {
                'type' : 'age',
                'value' : 'min 21'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 0 },
            { 'year' : 2013, 'count' : 0 },
            { 'year' : 2014, 'count' : 2 },
            { 'year' : 2015, 'count' : 1 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'Laos',
        'code' : 'LA',
        'region' : 'asia',
        'url' : 'adopter-au-laos',
        'warnings' : [
            "L’adoption internationale au Laos est suspendue jusqu’à la mise en œuvre d’un nouveau dispositif règlementaire d’adoption, prévu par le décret du 12 juin 2014."
        ]
    },
    {
        'name' : 'Lettonie',
        'code' : 'LV',
        'region' : 'asia',
        'clh' : { 'signed' : 2002, 'applied' : 2002 },
        'url' : 'adopter-en-lettonie',
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_woman'
            },
            {
                'type' : 'age',
                'value' : 'min 25'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 18'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 37 },
            { 'year' : 2013, 'count' : 25 },
            { 'year' : 2014, 'count' : 16 },
            { 'year' : 2015, 'count' : 18 },
            { 'year' : 2016, 'count' : 8 }
        ]
    },
    {
        'name' : 'Liban',
        'code' : 'LB',
        'region' : 'asia',
        'url' : 'adopter-au-liban',
        'warnings' : [
            "L’adoption au Liban par des familles françaises demeure un phénomène de faible envergure. L’existence de pratiques frauduleuses et de trafics d’enfant, régulièrement dénoncés par le passé, ont notamment conduit les deux OAA français accrédités au Liban à abandonner leur activité dans ce pays. <br/>Ainsi, les candidats à l’adoption doivent se montrer vigilants en ce qui concerne le choix de leur mandataire sur place. De leurs côtés, les autorités libanaises s’efforcent de lutter contre les fraudes, et exercent un contrôle sur la procédure d’adoption, notamment lors de la demande de passeport pour l’enfant et l’autorisation de sortie. <br/>Un projet d’adoption au Liban exige donc d’être mené avec la plus grande circonspection. Les familles candidates à l’adoption ne doivent pas hésiter à contacter les autorités françaises en cas de doutes dans leurs démarches."
        ],
        'comments' : [
            "Les candidatures de personnes divorcées ne sont pas acceptées."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 3 },
            { 'year' : 2013, 'count' : 5 },
            { 'year' : 2014, 'count' : 1 },
            { 'year' : 2015, 'count' : 2 },
            { 'year' : 2016, 'count' : 4 }
        ]
    },
    {
        'name' : 'Lituanie',
        'code' : 'LT',
        'region' : 'europe',
        'clh' : { 'signed' : 1998, 'applied' : 1998 },
        'url' : 'adopter-au-lituanie',
        'warnings' : [
            "Seuls les candidats répondant aux situations suivantes pourront engager une procédure d’adoption en Lituanie :<br/>- les couples mariés citoyens de la République de Lituanie résidant de façon permanente sur le territoire d’un Etat étranger,<br/>- les couples mariés dont l’un des conjoints est citoyen de la République de Lituanie,<br/>- les couples mariés, quelle que soit leur nationalité, souhaitant adopter un enfant à besoins spécifiques."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'age',
                'value' : 'min 18 max 50'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 18'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 9 },
            { 'year' : 2013, 'count' : 2 },
            { 'year' : 2014, 'count' : 2 },
            { 'year' : 2015, 'count' : 2 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'Macédoine',
        'code' : 'MK',
        'region' : 'europe',
        'clh' : { 'signed' : 2008, 'applied' : 2009 },
        'url' : 'adopter-en-macédoine',
        'warnings' : [
            "Bien que n’étant pas prohibée par la loi macédonienne, l’adoption internationale reste très exceptionnelle dans ce pays, qui privilégie des solutions nationales de prise en charge des enfants privés de famille.",
            "Les candidats étrangers à l’adoption d’un enfant macédonien doivent obtenir une autorisation spéciale de la Commission des adoptions du Ministère du Travail et des affaires sociales pour pouvoir poursuivre leur procédure.",
            "Aucun organisme français autorisé et habilité pour l’adoption n’est accrédité en Macédoine.",
            "Depuis 2009, aucune adoption d'enfant venant de Macédoine par des candidats français n'a été réalisé."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'age',
                'value' : 'max 45'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 18'
            }
        ]
    },
    {
        'name' : 'Madagascar',
        'code' : 'MG',
        'region' : 'africa',
        'clh' : { 'signed' : 2004, 'applied' : 2004 },
        'url' : 'adopter-a-madagascar',
        'comments' : [
            "Les couples mariés avec enfants sont acceptés. Toutefois, ils ne doivent pas avoir, au jour de l’adoption, plus de trois enfants à charge, en comptant le ou les enfants adoptés."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'age',
                'value' : 'at least one min 30'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 31 },
            { 'year' : 2013, 'count' : 33 },
            { 'year' : 2014, 'count' : 33 },
            { 'year' : 2015, 'count' : 30 },
            { 'year' : 2016, 'count' : 37 }
        ]
    },
    {
        'name' : 'Malaisie',
        'code' : 'MY',
        'region' : 'asia',
        'url' : 'adopter-en-malaisie',
        'warnings' : [
            "Le demandeur doit être habituellement résident en Malaisie."
        ]
    },
    {
        'name' : 'Mali',
        'code' : 'ML',
        'region' : 'africa',
        'clh' : { 'signed' : 2006, 'applied' : 2006 },
        'url' : 'adopter-au-mali',
        'comments' : [
            "Seules les candidatures de personnes sans enfants sont acceptés."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_woman single_man'
            },
            {
                'type' : 'age',
                'value' : 'at least one min 30'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 33 },
            { 'year' : 2013, 'count' : 2 },
            { 'year' : 2014, 'count' : 36 },
            { 'year' : 2015, 'count' : 14 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'Maurice',
        'code' : 'MU',
        'region' : 'africa',
        'clh' : { 'signed' : 1998, 'applied' : 1999 },
        'url' : 'adopter-au-mali',
        'warnings' : [
            "Aucun dossier ne sera désormais accepté et transmis par la Mission de l’Adoption Internationale."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 12 },
            { 'year' : 2013, 'count' : 3 },
            { 'year' : 2014, 'count' : 0 },
            { 'year' : 2015, 'count' : 1 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'Mexique',
        'code' : 'MX',
        'region' : 'latam',
        'url' : 'adopter-au-mexique',
        'clh' : { 'signed' : 1993, 'applied' : 1995 },
        'warnings' : [
            "Des difficultés ont été constatées dans les procédures d’adoption engagées au Mexique :<br/>- des dossiers demeurent en liste d’attente pendant plusieurs années,<br/>- il est difficile d’obtenir des informations sur l’état d’avancement des dossiers, de même que le certificat de conformité en fin de procédure,<br/>- beaucoup des enfants proposés sont « à particularités »."
        ],
        'comments' : [
            "Les exigences concernant l’âge des postulants à l’adoption sont fixées par les codes civils de chaque État de même que l’âge minimum pour adopter (à conjuguer avec les exigences de la loi française en la matière)."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 0 },
            { 'year' : 2013, 'count' : 1 },
            { 'year' : 2014, 'count' : 2 },
            { 'year' : 2015, 'count' : 0 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'Moldavie',
        'code' : 'MD',
        'region' : 'europe',
        'url' : 'adopter-en-moldavie',
        'warnings' : [
            "La Moldavie demeure peu ouverte à l’adoption internationale. Les rares adoptions prononcées concernent essentiellement des enfants âgés ou présentant de graves pathologies. Aussi, les candidats à l’adoption sont-ils invités à réorienter leur projet vers un autre pays."
        ]
    },
    {
        'name' : 'Mongolie',
        'code' : 'MN',
        'region' : 'asia',
        'url' : 'adopter-en-mongolie',
        'clh' : { 'signed' : 2000, 'applied' : 2000 },
        'comments' : [
            "Les candidats doivent être en pleine possession de ses droits civiques, disposer des moyens nécessaires pour assurer l’éducation de l’enfant.",
            "Ne peuvent adopter les personnes qui ont adopté un enfant et l’ont abandonné, ou dont la garde leur a été retiré.",
            "Ne peuvent adopter les personnes qui sont atteintes de tuberculose ou de maladie mentale ou du SIDA, s’adonnent à la consommation d’alcool ou de stupéfiants, ont été condamnées à plusieurs reprises dans le passé, sont en détention, seraient motivées par le profit.",
            "Les adoptants ayant déjà adopté un enfant ressortissant de Mongolie ne peuvent procéder à l’adoption d’un autre enfant avant un délai d’un an à compter de la remise officielle de l’enfant. Cette restriction ne s’applique pas dans le cas de l’adoption de fratries. "
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_woman'
            }, 
            {
                'type' : 'marriage',
                'value' : 'min 5'
            }, 
            {
                'type' : 'age',
                'value' : 'max 60'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 0 },
            { 'year' : 2013, 'count' : 0 },
            { 'year' : 2014, 'count' : 0 },
            { 'year' : 2015, 'count' : 0 },
            { 'year' : 2016, 'count' : 1 }
        ]
    },
    {
        'name' : 'Népal',
        'code' : 'NP',
        'region' : 'asia',
        'url' : 'adopter-au-nepal',
        'clh' : { 'signed' : 2009, 'applied' : '?' },
        'warnings' : [
            "Depuis 2010, la concertation multilatérale, à laquelle participe activement la France, a exprimé ses profondes réserves sur le dispositif actuel de l’adoption internationale au Népal, et notamment, sur la fiabilité des documents attestant de l’origine des enfants népalais proposés à l’adoption, ainsi que de leurs conditions d’abandon et de prise en charge.<br/>Dans ce contexte délicat, la France, comme plusieurs autres pays d’accueil, s’est abstenue de présenter de nouveaux dossiers aux autorités népalaises."
        ]
    },
    {
        'name' : 'Niger',
        'code' : 'NE',
        'region' : 'africa',
        'url' : 'adopter-au-niger',
        'comments' : [
            "Les couples ayant des enfants biologiques ne peuvent adopter au Niger."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'marriage',
                'value' : 'min 10'
            },
            {
                'type' : 'age',
                'value' : 'at least one min 35'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 3 },
            { 'year' : 2013, 'count' : 3 },
            { 'year' : 2014, 'count' : 6 },
            { 'year' : 2015, 'count' : 11 },
            { 'year' : 2016, 'count' : 6 }
        ]
    },
    {
        'name' : 'Nigeria',
        'code' : 'NG',
        'region' : 'africa',
        'url' : 'adopter-au-nigeria',
        'comments' : [
            "Seuls des enfants de sexe masculin pourront être confiés à des hommes célibataires, divorcés ou veufs et des enfants de sexe féminin à des femmes célibataires, divorcées ou veuves."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'marriage',
                'value' : 'min 10'
            },
            {
                'type' : 'age',
                'value' : 'at least one min 25'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 21'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 7 },
            { 'year' : 2013, 'count' : 9 },
            { 'year' : 2014, 'count' : 3 },
            { 'year' : 2015, 'count' : 1 },
            { 'year' : 2016, 'count' : 2 }
        ]
    },
    {
        'name' : 'Ouzbékistan',
        'code' : 'UZ',
        'region' : 'asia',
        'url' : 'adopter-en-ouzbekistan',
        'warnings' : [
            "L’adoption internationale en Ouzbékistan est légalement possible. Toutefois :<br/>- les enfants adoptables y sont très peu nombreux ;<br/>- l’adoption internationale est subsidiaire ;<br/>- les autorités privilégient, en règle générale, les candidats ayant un lien familial avec le pays.",
            "Dans ces conditions, une procédure d’adoption menée dans ce pays peut être longue, difficile et sans garantie quant à son aboutissement."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            }
        ]
    },
    {
        'name' : 'Paraguay',
        'code' : 'PY',
        'region' : 'latam',
        'url' : 'adopter-au-paraguay',
        'clh' : { 'signed' : 1998, 'applied' : 1998 },
        'warnings' : [
            "L’adoption internationale n’est accordée qu’exceptionnellement et à défaut d’adoption par des nationaux. La préférence est donnée à des nationaux ou des étrangers résidant définitivement dans le pays plutôt qu’à des étrangers ou nationaux domiciliés à l’étranger"
        ]
    },
    {
        'name' : 'Pérou',
        'code' : 'PE',
        'region' : 'latam',
        'url' : 'adopter-au-perou',
        'comments' : [
            "Les couples mariés ayant déjà 2 enfants ne peuvent adopter que des enfants âgés de plus de 5 ans ou souffrant d’un handicap.",
            "Seuls des enfants de plus de 8 ans ou souffrant d’un handicap sont proposés aux candidats célibataires."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'marriage',
                'value' : 'min 2'
            },
            {
                'type' : 'age',
                'value' : 'min 25 max 52'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 18'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 3 },
            { 'year' : 2013, 'count' : 3 },
            { 'year' : 2014, 'count' : 4 },
            { 'year' : 2015, 'count' : 3 },
            { 'year' : 2016, 'count' : 9 }
        ]
    },
    {
        'name' : 'Philippines',
        'code' : 'PH',
        'region' : 'asia',
        'url' : 'adopter-aux-philippines',
        'clh' : { 'signed' : 1995, 'applied' : 1996 },
        'comments' : [
            "Depuis 2009, l’Autorité centrale philippine, l’Inter-Country Adoption Board (ICAB) :<br/>- exigerait l’exclusivité de la candidature d’adoption envers les Philippines, les candidats n’étant alors plus autorisés à déposer un dossier d’adoption dans un autre Etat d’origine ;<br/>- a exprimé de nouvelles exigences concernant l’état de santé physique et psychologique des adoptants. De plus, l’ICAB exige de tous les candidats à l’adoption d’un enfant philippin qu’ils produisent une évaluation psychologique complète.",
            "Les enfants actuellement adoptables aux Philippines sont, le plus souvent, âgés d’au moins 5 ans, en fratrie de 2 ou 3 enfants ou présentant des problèmes de santé physique ou psychologique.",
            "Les candidats doivent être pratiquants et présenter un témoignage de moralité, rédigé par une autorité religieuse locale, attestant de leur pratique religieuse.",
            "Les candidats doivent attester par certificat médical :<br/>- qu’ils ne sont pas atteints des maladies ou handicaps (référencées spécifiquement par l’ICAB),<br/>- qu’ils sont en bonne santé physique et mentale. Ils devront à cette fin se soumettre à des tests psychologiques / psychiatriques prescrit par l’ICAB prouvant qu’ils ne présentent pas certaines pathologies mentales."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'marriage',
                'value' : 'min 3'
            },
            {
                'type' : 'age',
                'value' : 'min 27 max 45'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 16 max 47'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 16 },
            { 'year' : 2013, 'count' : 23 },
            { 'year' : 2014, 'count' : 25 },
            { 'year' : 2015, 'count' : 19 },
            { 'year' : 2016, 'count' : 17 }
        ]
    },
    {
        'name' : 'Pologne',
        'code' : 'PL',
        'region' : 'europe',
        'url' : 'adopter-en-pologne',
        'clh' : { 'signed' : 1995, 'applied' : 1995 },
        'comments' : [
            "Les célibataires et les divorcés ne sont pas exclus de l’adoption mais ils ne sont pas prioritaires.",
            "Une différence d’âge convenable doit exister entre l’adoptant et l’adopté.",
            "La loi ne prévoit pas d’âge maximum ou minimum pour adopter. Cependant dans la pratique, la préférence est donnée aux femmes de moins de 40 ans et aux hommes de moins de 45 ans."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'age_gap',
                'value' : 'max 40'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 17 },
            { 'year' : 2013, 'count' : 18 },
            { 'year' : 2014, 'count' : 22 },
            { 'year' : 2015, 'count' : 5 },
            { 'year' : 2016, 'count' : 6 }
        ]
    },
    {
        'name' : 'République Centrafricaine',
        'code' : 'CF',
        'region' : 'africa',
        'url' : 'adopter-en-centrafrique',
        'comments' : [
            "En raison des conditions tenant à la sécurité, particulièrement dégradées en République centrafricaine (y compris dans la capitale), les candidats à l'adoption sont invités à consulter les «Conseils aux voyageurs» sur le site du Ministère des Affaires étrangères, avant tout déplacement dans le pays."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'marriage',
                'value' : 'min 5'
            },
            {
                'type' : 'age_married',
                'value' : 'at least one min 30'
            },
            {
                'type' : 'age_single',
                'value' : 'min 35'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 43 },
            { 'year' : 2013, 'count' : 73 },
            { 'year' : 2014, 'count' : 43 },
            { 'year' : 2015, 'count' : 11 },
            { 'year' : 2016, 'count' : 4 }
        ]
    },
    {
        'name' : 'République Dominicaine',
        'code' : 'DO',
        'region' : 'latam',
        'url' : 'adopter-en-republique-dominicaine',
        'clh' : { 'signed' : 2006, 'applied' : 2007 },
        'comments' : [
            "En raison des conditions tenant à la sécurité, particulièrement dégradées en République centrafricaine (y compris dans la capitale), les candidats à l'adoption sont invités à consulter les «Conseils aux voyageurs» sur le site du Ministère des Affaires étrangères, avant tout déplacement dans le pays."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'marriage',
                'value' : 'min 5'
            },
            {
                'type' : 'age',
                'value' : 'min 30 max 60'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ]
    },
    {
        'name' : 'Roumanie',
        'code' : 'RO',
        'region' : 'europe',
        'url' : 'adopter-en-roumanie',
        'clh' : { 'signed' : 1993, 'applied' : 1995 },
        'comments' : [
            "À l'exception des ressortissants roumains résidants à l'étranger, l'adoption internationale est prohibée en Roumanie"
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 0 },
            { 'year' : 2013, 'count' : 0 },
            { 'year' : 2014, 'count' : 0 },
            { 'year' : 2015, 'count' : 3 },
            { 'year' : 2016, 'count' : 1 }
        ]
    },
    {
        'name' : 'Russie',
        'code' : 'RU',
        'region' : 'europe',
        'url' : 'adopter-en-federation-de-russie',
        'comments' : [
            "Seules les candidatures de couples mariés hétérosexuels sont acceptées.",
            "Les personnes atteintes d’une maladie ou d’un handicap, ne sont pas acceptées."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'marriage',
                'value' : 'min 5'
            },
            {
                'type' : 'age',
                'value' : 'min 30 max 60'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 16'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 235 },
            { 'year' : 2013, 'count' : 185 },
            { 'year' : 2014, 'count' : 121 },
            { 'year' : 2015, 'count' : 51 },
            { 'year' : 2016, 'count' : 30 }
        ]
    },
    {
        'name' : 'Sénégal',
        'code' : 'SN',
        'region' : 'africa',
        'url' : 'adopter-au-senegal',
        'clh' : { 'signed' : 2011, 'applied' : 2011 },
        'warnings' : [
            "Dans l’attente de la mise en place par les autorités locales d’un cadre institutionnel et procédural conforme aux principes de la Convention, les adoptions internationales sont suspendues au Sénégal, à compter du 1er décembre 2011."
        ],
        'comments' : [
            "Sauf dispense du Président de la République, l’adoptant ne doit avoir, au jour de sa requête, ni enfant ni descendant légitime. En cas d’adoption conjointe par deux époux, il suffit qu’ils n’aient pas d’enfant issu de leur union."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'marriage',
                'value' : 'min 5'
            },
            {
                'type' : 'age_married',
                'value' : 'at least one min 30'
            },
            {
                'type' : 'age_single',
                'value' : 'min 35'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 14 },
            { 'year' : 2013, 'count' : 11 },
            { 'year' : 2014, 'count' : 8 },
            { 'year' : 2015, 'count' : 5 },
            { 'year' : 2016, 'count' : 4 }
        ]
    },
    {
        'name' : 'Slovaquie',
        'code' : 'SK',
        'region' : 'europe',
        'url' : 'adopter-en-slovaquie',
        'clh' : { 'signed' : 1999, 'applied' : 2001 },
        'warnings' : [
            
        ],
        'comments' : [
            "Les autorités Sri lankaises ont récemment informé le SAI qu’aucun enfant en bas âge n’était actuellement proposé à l’adoption internationale au Sri Lanka, ces enfants étant adoptés au niveau national. L’Autorité centrale du Sri Lanka ne souhaite plus recevoir aucun nouveau dossier, excepté ceux transmis par les opérateurs français pour des enfants présentant des pathologies."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'age',
                'value' : 'min 25'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 21'
            }
        ]
    },
    {
        'name' : 'Sri Lanka',
        'code' : 'LK',
        'region' : 'africa',
        'url' : 'adopter-au-sri-lanka',
        'clh' : { 'signed' : 1994, 'applied' : 1995 },
        'comments' : [
            "L’adoption par des célibataires est possible mais les autorités slovaques privilégient les couples mariés."
        ],
	    'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'age',
                'value' : 'min 18 max 50'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 1 },
            { 'year' : 2013, 'count' : 2 },
            { 'year' : 2014, 'count' : 3 },
            { 'year' : 2015, 'count' : 6 },
            { 'year' : 2016, 'count' : 3 }
        ]
    },
    {
        'name' : 'Taiwan',
        'code' : 'TW',
        'region' : 'asia',
        'url' : 'adopter-a-taiwan',
        'comments' : [
            "L’adoption internationale à Taïwan est possible mais très limitée du fait, notamment, de l’absence d’OAA français en ce pays et du faible nombre d’enfants adoptables. Par ailleurs, la tendance de ce pays est désormais de privilégier l’adoption nationale"
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 1 },
            { 'year' : 2013, 'count' : 2 },
            { 'year' : 2014, 'count' : 3 },
            { 'year' : 2015, 'count' : 6 },
            { 'year' : 2016, 'count' : 3 }
        ]
    },
    {
        'name' : 'Tchad',
        'code' : 'TD',
        'region' : 'africa',
        'url' : 'adopter-au-tchad',
        'comments' : [
            "Les adoptants ne doivent avoir au jour de la requête ni enfants, ni descendants légitimes."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'marriage',
                'value' : 'min 8'
            },
            {
                'type' : 'age',
                'value' : 'at least one min 30'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 1 },
            { 'year' : 2013, 'count' : 1 },
            { 'year' : 2014, 'count' : 3 },
            { 'year' : 2015, 'count' : 0 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'Thaïlande',
        'code' : 'TH',
        'region' : 'asia',
        'url' : 'adopter-en-thailande',
        'clh' : { 'signed' : 2004, 'applied' : 2004 },
        'warnings' : [
            "Depuis 2005, du fait de l’application du principe de subsidiarité posé par la Convention de La Haye du 29 mai 1993, le nombre d’enfants proposés à l’adoption internationale en Thaïlande a diminué, conduisant les autorités thaïlandaises à fixer annuellement un quota, par pays et par opérateur, pour l’envoi de nouvelles candidatures, dont le projet concerne des enfants jeunes sans particularité.<br/>En 2010 et 2011, seuls les dossiers concernant l’adoption d’enfants à besoins spécifiques ont pu être déposés auprès de l’Autorité centrale thaïlandaise par l’AFA et l’OAA Orchidée Adoption.<br/>En 2012, les opérateurs français ont de nouveau été autorisés à adresser un nombre limité de dossiers (cinq) pour des enfants ne présentant pas de particularités."
        ],
        'comments' : [
            "Les textes thaïlandais ne comportent aucune disposition relative à l’existence d’enfants dans le foyer des candidats à l’adoption. Toutefois, dans la pratique, les candidatures des couples ayant déjà 2 enfants ou plus ont de faibles chances d’être retenues par le DCY, sauf dans l’hypothèse des projets d’adoption concernant des enfants à besoins spécifiques."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'marriage',
                'value' : 'min 2'
            },
            {
                'type' : 'age',
                'value' : 'min 25'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15 max 40'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 37 },
            { 'year' : 2013, 'count' : 51 },
            { 'year' : 2014, 'count' : 57 },
            { 'year' : 2015, 'count' : 41 },
            { 'year' : 2016, 'count' : 46 }
        ]
    },
    {
        'name' : 'Togo',
        'code' : 'TG',
        'region' : 'africa',
        'url' : 'adopter-au-togo',
        'clh' : { 'signed' : 2009, 'applied' : 2010 },
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'age',
                'value' : 'at least one min 30'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 18'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 14 },
            { 'year' : 2013, 'count' : 2 },
            { 'year' : 2014, 'count' : 13 },
            { 'year' : 2015, 'count' : 6 },
            { 'year' : 2016, 'count' : 5 }
        ]
    },
    {
        'name' : 'Tunisie',
        'code' : 'TN',
        'region' : 'africa',
        'url' : 'adopter-en-tunisie',
        'comments' : [
            "Les candidats à l’adoption doivent être de nationalité tunisienne et de religion musulmane.",
            "Les demandes d’adoption émanant de personnes étrangères ou même tunisiennes non musulmanes ne peuvent être recevables. Le critère religieux et de nationalité tunisienne est exigé pour les deux membres du couple. Ce principe peut être assoupli dès lors que la famille réside en Tunisie et que le chef de famille remplit ces conditions ou que les deux membres du couple sont musulmans résidant dans un pays arabe et musulman ou si le candidat à l’adoption a des attaches familiales tunisiennes."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'age',
                'value' : 'min 20'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 15'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 43 },
            { 'year' : 2013, 'count' : 27 },
            { 'year' : 2014, 'count' : 22 },
            { 'year' : 2015, 'count' : 19 },
            { 'year' : 2016, 'count' : 19 }
        ]
    },
    {
        'name' : 'Turquie',
        'code' : 'TR',
        'region' : 'asia',
        'url' : 'adopter-en-turquie',
        'clh' : { 'signed' : 2001, 'applied' : 2004 },
        'warnings' : [
            "Dans le respect du principe de subsidiarité (article 4 b de la CLH 93) et en raison du nombre important de candidatures locales turques à l’adoption nationale, l’Autorité Centrale turque a informé la MAI le 03.02.2016 qu’aucune suite favorable ne pouvait être réservée aux dossiers de candidature à l’adoption internationale. Les candidats sont invités à s’orienter vers un autre pays."
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 3 },
            { 'year' : 2013, 'count' : 1 },
            { 'year' : 2014, 'count' : 1 },
            { 'year' : 2015, 'count' : 0 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'Ukraine',
        'code' : 'UA',
        'region' : 'europe',
        'url' : 'adopter-en-ukraine',
        'warnings' : [
            "Les candidats désirant adopter un enfant invalide seront prioritaires.",
            "Le Centre des Adoptions (SDA) ne peut pas répondre positivement à l’orientation des projets d’adoption des candidats français, tournés exclusivement vers des enfants en bas âge avec des problèmes de santé mineurs. Selon les statistiques en sa possession, il est pratiquement impossible au SDA de satisfaire les demandes d’adoption d’enfants de moins de 6 ans sans problème de santé. Les enfants de moins de 6 ans sont peu nombreux et souffrent de graves problèmes de santé (infection au VIH, hépatite C, troubles mentaux, trisomie)."
        ],
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 18 max 45'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 21 },
            { 'year' : 2013, 'count' : 12 },
            { 'year' : 2014, 'count' : 9 },
            { 'year' : 2015, 'count' : 5 },
            { 'year' : 2016, 'count' : 5 }
        ]
    },
    {
        'name' : 'Uruguay',
        'code' : 'UY',
        'region' : 'latam',
        'url' : 'adopter-en-uruguay',
        'clh' : { 'signed' : 1993, 'applied' : 2004 },
        'warnings' : [
            "Bien que ratifiée, la convention de La Haye n’est pas appliquée. En effet, l’Uruguay n’a toujours pas désigné les autorités compétentes. C’est donc le Code de l’enfance et de l’adolescence (loi du 7 septembre 2004) qui régit encore l’adoption internationale en Uruguay.",
            "Il est à noter que le taux de natalité uruguayen est actuellement très bas et que, s’agissant d’adoption, la loi en vigueur donne clairement la priorité aux couples ayant leur résidence en Uruguay."
        ]
    },
    {
        'name' : 'Venezuela',
        'code' : 'VE',
        'region' : 'latam',
        'url' : 'adopter-au-venezuela',
        'clh' : { 'signed' : 1997, 'applied' : 1997 },
        'warnings' : [
            "Concernant l’adoption internationale, une condition de résidence de trois mois au minimum sur place avec l’enfant à adopter, ainsi qu’une position défavorable des autorités locales, font qu’aucune adoption n’a été réalisée dans ce pays depuis l’entrée en vigueur de la Convention de La Haye du 29 mai 1993."
        ]
    },
    {
        'name' : 'Viet Nam',
        'code' : 'VN',
        'region' : 'asia',
        'clh' : { 'signed' : 2010, 'applied' : 2012 },
        'url' : 'adopter-au-vietnam',
        'constraints' : [
            {
                'type' : 'status',
                'value' : 'married_couple single_man single_woman'
            },
            {
                'type' : 'age_gap',
                'value' : 'min 20'
            }
        ],
        'stats' : [
            { 'year' : 2012, 'count' : 76 },
            { 'year' : 2013, 'count' : 89 },
            { 'year' : 2014, 'count' : 129 },
            { 'year' : 2015, 'count' : 108 },
            { 'year' : 2016, 'count' : 74 }
        ]
    }
];
