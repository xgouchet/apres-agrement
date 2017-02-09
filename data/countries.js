var countries = [
    {
        'name' : 'Afrique du Sud',
        'code' : 'ZA',
        'region' : 'africa',
        'clh' : { 'signed' : 2003, 'applied' : 2003 }, 
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-afrique-du-sud',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-albanie',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-argentine',
	    'warnings' : [
		    "Les candidats doivent résider en Argentine depuis au moins 5 ans avant de pouvoir effectuer la demande d'adoption. Le jugement d'adoption ne peut être rendu qu'après une période de garde provisoire de 6 mois à 1 an, qui doit obligatoirement avoir lieu en Argentine."
        ]
    },
    {
        'name' : 'Arménie',
        'code' : 'AM',
        'region' : 'europe',
        'clh' : { 'signed' : 2007, 'applied' : 2007 },
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-armenie',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-azerbaidjan',
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
            { 'year' : 2013, 'count' : 1 }
        ]
    },
    {
        'name' : 'Bénin',
        'code' : 'BJ',
        'region' : 'africa',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-au-benin',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-bielorussie',
	    'warnings' : [
	    	"Pour des raisons internes au pays, l'adoption internationale, bien que légalement autorisée, est inexistante depuis le mois d'octobre 2004. Aucun opérateur français n'est accrédité en Biélorussie."
        ]
    },
    {
        'name' : 'Birmanie',
        'code' : 'MM',
        'region' : 'asia',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-birmanie',
    	'warnings' : [
	    	"Pour des raisons internes au pays, l'adoption d'enfants birmans par des étrangers est suspendue depuis 1996."
        ]
    },
    {
        'name' : 'Bolivie',
        'code' : 'BO',
        'region' : 'latam',
        'clh' : { 'signed' : 2000, 'applied' : 2002 },
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-bolivie',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-bosnie',
    	'warnings' : [
	    	"Aux termes de la loi bosnienne, l’adoption est réservée aux ressortissants de Bosnie-Herzégovine. Néanmoins, il existe deux exceptions : l’adoption par un Français d’origine bosnienne; l’adoption de l’enfant du conjoint d’origine bosnienne."
        ]
    },
    {
        'name' : 'Brésil',
        'code' : 'BR',
        'region' : 'latam',
        'clh' : { 'signed' : 1993, 'applied' : 1999 },
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-au-bresil',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-bulgarie',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-au-burkina-faso',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-au-burundi',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-au-cambodge',
        'warnings' : [
            "Les adoptions sont suspendues au Cambodge depuis 2013."
        ]
    },
    {
        'name' : 'Cameroun',
        'code' : 'CM',
        'region' : 'africa',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-au-cameroun',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-au-cap-vert',
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
            { 'year' : 2013, 'count' : 8 },
            { 'year' : 2014, 'count' : 7 },
            { 'year' : 2015, 'count' : 0 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'République Centrafricaine',
        'code' : 'CF',
        'region' : 'africa',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-centrafrique',
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
            { 'year' : 2013, 'count' : 73 },
            { 'year' : 2014, 'count' : 43 },
            { 'year' : 2015, 'count' : 11 },
            { 'year' : 2016, 'count' : 4 }
        ]
    },
    {
        'name' : 'Chili',
        'code' : 'CL',
        'region' : 'latam',
        'clh' : { 'signed' : 1999, 'applied' : 1999 },
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-au-chili',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-chine',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-colombie',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-au-congo-brazzaville',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-au-congo-republique-democratique',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-coree-du-sud',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-au-costa-rica',
        'warnings' : [
            "Les enfants proposés exceptionnellement à l’adoption internationale sont, dans la grande majorité des cas, des enfants de plus de 5 ans, des enfants à besoins spécifiques ou des fratries."
        ]
    },
    {
        'name' : 'Côte d\'Ivoire',
        'code' : 'CI',
        'region' : 'latam',
        'clh' : { 'signed' : 2015, 'applied' : 2015 },
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-cote-d-ivoire',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-a-cuba',
        'warnings' : [
            "Il est très difficile d’adopter à CUBA. Les quelques dossiers initiés n’ont pas abouti. PAYS A DECONSEILLER."
        ]
    },
    {
        'name' : 'Djibouti',
        'code' : 'DJ',
        'region' : 'africa',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-cote-d-ivoire',
        'warnings' : [
            "Le code Djiboutien de la famille interdit l'adoption internationale."
        ]
    },
    {
        'name' : 'Dominique',
        'code' : 'DM',
        'region' : 'latam',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-dominique',
        'warnings' : [
            "La Mission de l’Adoption internationale a décidé en 2016 de suspendre toutes les adoptions internationales dans ce pays."
        ],
        'stats' : [
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-equateur',
        'warnings' : [
            "Aucun OAA n'est acrédité en Équateur"
        ]
    },
    {
        'name' : 'États-Unis',
        'code' : 'US',
        'region' : 'latam',
        'clh' : { 'signed' : 1994, 'applied' : 2008 },
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-aux-etats-unis',
        'comments' : [
            "Les critères d’éligibilité varient selon chaque Etat. Les informations détaillées relatives aux personnes, institutions et autorités dont le consentement est requis pour une adoption sont définies par la législation des Etats : âge des adoptants, situation matrimoniale etc… ",
            "Une bonne pratique de la langue anglaise est requise : les juges et les travailleurs sociaux y accordent une grande importance."
        ]
    },
    {
        'name' : 'Ethiopie',
        'code' : 'ET',
        'region' : 'africa',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-ethiopie',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-au-gabon',
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
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-en-georgie',
        'comments' : [
            "Compte-tenu des difficultés importantes rencontrées dans l’application de la Convention de La Haye du 29 mai 1993 sur la protection des enfants et la coopération en matière d’adoption internationale, l’attention des candidats est attirée sur le fait qu’une démarche dans ce pays pourrait s’avérer longue, difficile et sans garantie quant à son aboutissement."
        ]
    },
    {
        'name' : 'Ghana',
        'code' : 'GH',
        'region' : 'africa',
        'clh' : { 'signed' : 2016, 'applied' : 2017 },
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-au-ghana',
        'warnings' : [
            "Le Ghana a ratifié la convention le 16 septembre 2016 et celle-ci est entrée en vigueur le 1er janvier 2017. Néanmoins, cet Etat n’ayant pas encore mis en œuvre les mécanismes opérationnels prévus par cette convention, les procédures d’adoption internationale, y compris d’adoption intrafamiliale, demeurent suspendues au Ghana sine die. (25/01/2017)"
        ],
        'stats' : [
            { 'year' : 2013, 'count' : 3 },
            { 'year' : 2014, 'count' : 0 },
            { 'year' : 2015, 'count' : 1 },
            { 'year' : 2016, 'count' : 0 }
        ]
    },
    {
        'name' : 'Viet Nam',
        'code' : 'VN',
        'region' : 'asia',
        'clh' : { 'signed' : 2010, 'applied' : 2012 },
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/comment-adopter-a-l-etranger/les-fiches-pays-de-l-adoption-internationale/fiches-pays-adoption/article/adopter-au-vietnam',
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
