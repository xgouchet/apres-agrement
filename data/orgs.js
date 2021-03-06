var organizations = [
    {
        'name' : 'AFA',
        'title' : 'Agence Française de l\'Adoption',
        'url' : 'http://www.agence-adoption.fr/',
        'countries' : [ 'BF', 'MG', 'ML', 'TG', // Afrique
                        'CL', 'CO', 'HT', 'MX', 'PE', 'DO', //Latam
                        'KH', 'CN', 'IN', 'PH', 'LK', 'TH', 'VN', //Asia
                        'AL', 'AZ', 'BG', 'HU', 'LV', 'LT', 'PO', 'RO', 'RU' // Europe
                      ],
        'counties' :  [ '01', '02', '03', '04', '05', '06', '07', '08', '09', 
                        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
                        '2A', '2B', '21', '22', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', 
                        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', 
                        '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', 
                        '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', 
                        '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', 
                        '90', '91', '92', '93', '94', '95', 
                        '971', '972', '973', '974', '975', '976']
    },
    {
        'name' : 'Accueil aux Enfants du monde',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/les-operateurs-de-l-adoption-internationale/organismes-autorises-pour-l-adoption-oaa/article/accueil-aux-enfants-du-monde',
        'countries' : [ 'BF', 'MG' ],
        'counties' :  [ '13', '30', '34', '48', '84']
    },
    {
        'name' : 'Accueil et Partage',
        'url' : 'http://www.aep.asso.fr/',
        'countries' : [ 'ET', 'HT' ],
        'counties' :  [ '02', '07', '11', '12', '13', '14', '22', '27', '28', 
                        '30', '31', '34', '36', '37', '41', '45', '48', 
                        '56', '59', '60', '61', '66', '72', '76', '78', 
                        '80', '91', '92', '95' ]
    },
    {
        'name' : 'Agir pour l’Enfant',
        'url' : 'http://www.agirpourlenfant.fr/',
        'countries' : [ 'HT' ],
        'counties' :  [ '16', '17', '18', '22', '28', '29', 
                        '31', '32', '33', '35', '36', '37', 
                        '41', '44', '45', '49', '56', 
                        '66', '72', '75', '79', '82', '85', '86', 
                        '91', '92' ]
    },
    {
        'name' : 'Les Amis des enfants du Monde',
        'url' : 'http://www.amisdesenfantsdumonde.org/',
        'countries' : [ 'KH', 'ET', 'HT', 'PH' ],
        'counties' :  [ '01', '02', '03', '07', '08', '09', '10', '11', '13', '16', '17', '19', 
                        '21', '22', '23', '24', '25', '26', '27', '29', 
                        '30', '31', '33', '35', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '47', '49', 
                        '50', '51', '52', '53', '54', '55', '57', '58', '59', 
                        '60', '62', '63', '64', '65', '67', '68', '69', 
                        '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', 
                        '81', '83', '84', '85', '86', '87', '88', '89', 
                        '91', '92', '93', '94', '95']
    },
    {
        'name' : 'Arc-en-ciel',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/les-operateurs-de-l-adoption-internationale/organismes-autorises-pour-l-adoption-oaa/article/arc-en-ciel',
        'countries' : [ 'BR', 'CV', 'CO' ],
        'counties' :  [ '06', '13', '14', '17', '24', '26', '28', '29', 
                        '35', '37', '44', '49', '50', '53', '56', '66', 
                        '72', '78', '79', '82', '83', '85', '86', 
                        '91', '92', '93', '973']
    },
    {
        'name' : 'Ayuda',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/les-operateurs-de-l-adoption-internationale/organismes-autorises-pour-l-adoption-oaa/article/ayuda',
        'countries' : [ 'BG', 'GT', 'MX' ],
        'counties' :  [ '14', '16', '17', '18', '22', '24', '27', '28', '29', 
                        '31', '32', '33', '34', '35', '36', '37', '39', 
                        '40', '41', '44', '45', '47', '49', 
                        '50', '53', '56', '59', '64', '65', '69', 
                        '71', '72', '75', '76', '77', '78', '79', 
                        '80', '83', '85', '86', '87', '89', '91', '92', '93', '94']
    },
    {
        'name' : 'Chemin vers l\'enfant',
        'url' : 'http://cheminverslenfant.free.fr/',
        'countries' : [ 'ZA', 'BF', 'HT' ],
        'counties' :  [ '01', '02', '03', '05', '07', '08', '09', 
                        '10', '12', '13', '14', '16', '18', '19', 
                        '23', '24', '27', '28', '29', 
                        '31', '32', '33', '35', '36', '37', '39', 
                        '40', '41', '44', '45', '46', '47', '48', '49', 
                        '50', '51', '53', '55', '56', '57', '58', '59', 
                        '60', '62', '63', '64', '65', '67', '68', '69', 
                        '72', '75', '76', '77', '78', '79', 
                        '80', '82', '83', '84', '85', '86', '87', '89', 
                        '91', '92', '93', '95']
    },
    {
        'name' : 'Children of the sun',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/les-operateurs-de-l-adoption-internationale/organismes-autorises-pour-l-adoption-oaa/article/children-of-the-sun',
        'countries' : [ 'ET' ],
        'counties' :  [ '14', '29', '37', '41', '44', '49', '53', '61', '72', '75', '91' ]
    },
    {
        'name' : 'COFA - Bordeaux',
        'title' : 'Confédération Française pour l\'Adoption',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/les-operateurs-de-l-adoption-internationale/organismes-autorises-pour-l-adoption-oaa/article/cofa-bordeaux-comite-de-bordeaux',
        'countries' : [ 'CO' ],
        'counties' :  [ '01', '02', '03', '05', '06', '07', '08', '09', 
                        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
                        '2A', '2B', '21', '22', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', 
                        '50', '51', '52', '53', '55', '56', '57', '58', '59', 
                        '60', '61', '63', '64', '65', '66', '67', '68', '69', 
                        '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', 
                        '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', 
                        '91', '92', '93', '94', '95', '974' ]
    },
    {
        'name' : 'COFA - Brive',
        'title' : 'Confédération Française pour l\'Adoption',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/les-operateurs-de-l-adoption-internationale/organismes-autorises-pour-l-adoption-oaa/article/cofa-brive',
        'countries' : [ 'HT', 'MG' ],
        'counties' :  [ '01', '02', '03', '05', '06', '07', '08', '09', 
                        '10', '11', '12', '13', '14', '15', '17', '19', 
                        '2A', '2B', '21', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '32', '33', '35', '36', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', 
                        '50', '53', '55', '56', '57', '58', '59', 
                        '60', '61', '63', '64', '65', '66', '67', '68', '69', 
                        '70', '71', '72', '73', '74', '76', '78', '79', 
                        '80', '82', '83', '84', '85', '86', '87', '88', 
                        '91', '92', '95', '974 ' ]
    },
    {
        'name' : 'COFA - Cognac',
        'title' : 'Confédération Française pour l\'Adoption',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/les-operateurs-de-l-adoption-internationale/organismes-autorises-pour-l-adoption-oaa/article/cofa-cognac',
        'countries' : [ 'BR', 'HT', 'VN' ],
        'counties' :  [ '01', '02', '03', '04', '05', '06', '07', '08', '09', 
                        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
                        '2A', '2B', '21', '22', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', 
                        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', 
                        '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', 
                        '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', 
                        '80', '81', '82', '83', '84', '85', '86', '87', '88', 
                        '90', '91', '92', '93', '94', '95', 
                        '974']
    },
    {
        'name' : 'COFA - Lille',
        'title' : 'Confédération Française pour l\'Adoption',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/les-operateurs-de-l-adoption-internationale/organismes-autorises-pour-l-adoption-oaa/article/cofa-lille',
        'countries' : [ 'BO', 'BR', 'HT' ],
        'counties' :  [ '01', '02', '03', '04', '05', '06', '07', '08', '09', 
                        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
                        '2A', '2B', '21', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', 
                        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', 
                        '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', 
                        '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', 
                        '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', 
                        '90', '91', '92', '93', '94', '95', 
                        '974']
    },
    {
        'name' : 'COFA - Lyon',
        'title' : 'Confédération Française pour l\'Adoption',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/les-operateurs-de-l-adoption-internationale/organismes-autorises-pour-l-adoption-oaa/article/cofa-lyon',
        'countries' : [ 'CO', 'HT' ],
        'counties' :  [ '01', '02', '03', '05', '06', '07', '08', '09', 
                        '10', '11', '12', '13', '14', '15', '17', 
                        '2A', '2B', '21', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '32', '33', '35', '36', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', 
                        '50', '51', '53', '54', '55', '56', '57', '58', '59', 
                        '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', 
                        '70', '71', '72', '73', '74', '75', '76', '78', '79', 
                        '80', '82', '83', '84', '85', '86', '87', '88', '89', 
                        '90', '91', '92', '95', '974' ]
    },
    {
        'name' : 'COFA - Marseille',
        'title' : 'Confédération Française pour l\'Adoption',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/les-operateurs-de-l-adoption-internationale/organismes-autorises-pour-l-adoption-oaa/article/cofa-marseille',
        'countries' : [ 'CN', 'IN', 'NP', 'VN' ],
        'counties' :  [ '01', '02', '03', '04', '05', '06', '07', '08', '09', 
                        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
                        '2A', '2B', '21', '22', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', 
                        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', 
                        '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', 
                        '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', 
                        '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', 
                        '91', '92', '93', '94', '95', '974']
    },
    {
        'name' : 'COFA - Montauban',
        'title' : 'Confédération Française pour l\'Adoption',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/les-operateurs-de-l-adoption-internationale/organismes-autorises-pour-l-adoption-oaa/article/cofa-montauban',
        'countries' : [ 'PL' ],
        'counties' :  [ '01', '02', '03', '04', '05', '06', '07', '08', '09', 
                        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
                        '2A', '2B', '21', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '32', '33', '35', '36', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', 
                        '50', '52', '53', '54', '55', '56', '57', '58', '59', 
                        '60', '61', '63', '64', '65', '66', '67', '68', '69', 
                        '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', 
                        '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', 
                        '90', '91', '92', '93', '94', '95', '974' ]
    },
    {
        'name' : 'De Pauline à Anaëlle',
        'url' : 'http://www.pauline-anaelle.org/',
        'countries' : [ 'RU' ],
        'counties' :  [ '03', '06', '07', '09', '11', '12', '13', '15', '16', '18', '19', 
                        '21', '23', '24', '28', '29', 
                        '30', '31', '32', '33', '34', '36', '37', '38', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '49', 
                        '52', '56', '59', '60', '62', '63', '64', '66', '69', 
                        '73', '74', '75', '77', '79', 
                        '80', '82', '83', '84', '85', '86', '87', 
                        '91', '92', '93', '95']
    },
    {
        'name' : 'Destinées',
        'url' : 'http://www.destinees.org/',
        'countries' : [ 'SK', 'VN' ],
        'counties' :  [ '02', '04', '06', '08', '10', '13', '17', '2A', '2B', '24', '25', '28', 
                        '33', '35', '38', '45', '47', '50', '51', '52', '54', '55', '57', '59', 
                        '64', '67', '68', '70', '74', '75', '77', '79', '83', '84', '88', '90', '92' ]
    },
    {
        'name' : 'Diaphanie',
        'url' : 'http://diaphanie.e-monsite.com/',
        'countries' : [ 'CO' ],
        'counties' :  [ '01', '02', '03', '04', '05', '06', '07', '08', '09', 
                        '10', '11', '12', '13', '14', '15', '17', '18', '19', 
                        '21', '22', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '32', '33', '34', '36', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', 
                        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', 
                        '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', 
                        '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', 
                        '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', 
                        '90', '91', '92', '93', '94', '95']
    },
    {
        'name' : 'Edelweiss Accueil',
        'url' : 'http://www.edelweiss-accueil.org/',
        'countries' : [ 'CN', 'PE' ],
        'counties' :  [ '01', '03', '04', '05', '06', '07', '11', '12', '13', '15', 
                        '26', '30', '34', '38', '42', '43', '48', '63', '69', 
                        '71', '73', '74', '83', '84']
    },
    {
        'name' : 'Enfance Avenir',
        'url' : 'http://www.enfanceavenir.org/',
        'countries' : [ 'KZ', 'MG', 'RU', 'VN' ],
        'counties' :  [ '01', '05', '06', '07', '09', 
                        '10', '11', '12', '13', '14', '16', '17', '18', 
                        '21', '22', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '33', '34', '35', '36', '38', '39', 
                        '40', '42', '44', '45', '46', '49', 
                        '51', '52', '53', '54', '55', '56', '57', '58', '59', 
                        '60', '61', '62', '63', '64', '66', '67', '68', '69', 
                        '70', '71', '73', '74', '75', '76', '77', '78', 
                        '83', '84', '85', '88', '89', 
                        '90', '91', '92', '93', '94', '95' ]
    },
    {
        'name' : 'Enfants du Monde - France',
        'url' : 'http://www.edmf.org/',
        'countries' : [ 'CN', 'HT', 'IN', 'MN' ],
        'counties' :  [ '01', '02', '03', '04', '05', '06', '07', '08', '09',
                        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
                        '21', '22', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', 
                        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', 
                        '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', 
                        '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', 
                        '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', 
                        '90', '91', '92', '93', '94', '95']
    },
    {
        'name' : 'Kasih Bunda - France',
        'url' : 'http://kasihbunda.fr/',
        'countries' : [ 'BG', 'LK' ],
        'counties' :  [ '01', '07', '13', '26', '38', '42', '45', '54', '55', '60', '74']
    },
    {
        'name' : 'La Cause',
        'url' : 'http://www.lacause.org/',
        'countries' : [ 'MG' ],
        'counties' :  [ '01', '02', '03', '04', '05', '06', '07', '08', '09', 
                        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
                        '2A', '2B', '21', '22', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', 
                        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', 
                        '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', 
                        '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', 
                        '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', 
                        '90', '91', '92', '93', '94', '95' ]
    },
    {
        'name' : 'La famille adoptive Française',
        'url' : 'http://www.afaf.org/',
        'countries' : [ 'CN', 'CO' ],
        'counties' :  [ '01', '02', '03', '04', '06', '07', '08', '09',
                        '10', '11', '12', '13', '14', '15', '17', '18', '19', 
                        '2A', '2B', '21', '22', '23', '24', '25', '27', '28', '29', 
                        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', 
                        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', 
                        '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', 
                        '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', 
                        '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', 
                        '90', '91', '92', '93', '94', '95']
    },
    {
        'name' : 'La Providence',
        'url' : 'http://www.oaa-laprovidence.com/',
        'countries' : [ 'VN' ],
        'counties' :  [ '02', '04', '05', '06', '07', '09', '10', '13', '15', '16', '17', 
                        '2A', '2B', '22', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '33', '34', '35', '37', '39', 
                        '40', '42', '44', '45', '46', '47', '48', '49', 
                        '50', '53', '55', '56', '59', '60', '63', '64', '65', '68', '69', 
                        '70', '71', '73', '74', '75', '76', '77', '78', '79', 
                        '80', '83', '84', '85', '86', '87', '89', 
                        '91', '92', '93', '94', '95', '974']
    },

    {
        'name' : 'Les Enfants avant Tout',
        'url' : 'http://lesenfantsavanttout.net/',
        'countries' : [ 'ET', 'MG' ],
        'counties' :  [ '01', '03', '07', '15', '16', '17', '22', '23', '26', '29', 
                        '35', '42', '43', '44', '48', '49', '50', '53', '56', 
                        '63', '69', '71', '73', '74', '79', '85', '86', '87' ]
    },
    {
        'name' : 'Les Enfants de l’Espérance',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/les-operateurs-de-l-adoption-internationale/organismes-autorises-pour-l-adoption-oaa/article/les-enfants-de-l-esperance',
        'countries' : [ 'IN', 'LT' ],
        'counties' :  [ '01', '02', '03', '04', '05', '06', '08', '09', 
                        '10', '12', '13', '14', '15', '16', '17', '18', '19', 
                        '21', '23', '25', '27', '28', '29', 
                        '30', '31', '32', '33', '34', '35', '36', '37', '39', 
                        '40', '41', '43', '44', '45', '46', '48', '49', 
                        '50', '51', '53', '54', '55', '56', '57', '58', '59', 
                        '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', 
                        '71', '72', '73', '74', '75', '76', '77', '78', '79', 
                        '80', '83', '84', '85', '86', '87', '88', '89', 
                        '90', '91', '92', '93', '94', '95', ' 974']
    },
    {
        'name' : 'Les Enfants de Reine de Miséricorde',
        'url' : 'http://www.jadopte.fr/',
        'countries' : [ 'BF' , 'ET' ],
        'counties' :  [ '01', '02', '03', '04', '05', '06', '07', '08', '09', 
                        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
                        '2A', '21', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '33', '34', '35', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '49', 
                        '50', '51', '52', '53', '55', '56', '57', '58', '59', 
                        '60', '61', '62', '63', '64', '65', '66', '69', 
                        '70', '71', '72', '74', '75', '76', '77', '78', '79', 
                        '80', '81', '83', '84', '85', '86', '87', '88', '89', 
                        '92', '93', '94', '95']
    },
    {
        'name' : 'Lumière des Enfants',
        'url' : 'http://lumiere-des-enfants.org/',
        'countries' : [ 'BF', 'CG', 'CI', 'HT', 'MG', 'NG', 'TG' ],
        'counties' :  [ '02', '04', '06', '13', '16', '17', '18', 
                        '22', '24', '25', '27', '28', '29', 
                        '30', '31', '32', '33', '35', '36', '37', '39', 
                        '41', '42', '44', '45', '47', '49', 
                        '50', '54', '55', '56', '57', '59', 
                        '60', '62', '64', '67', '68', '69', 
                        '70', '71', '73', '76', '77', 
                        '80', '82', '83', '84', '85', '88', '90']
    },
    /*
    {
        'name' : 'Médecins du Monde',
        'url' : 'http://www.medecinsdumonde.org/',
        'countries' : [ 'AL', 'BR' , 'BG', 'CN', 'CO', 'CI', 'HT', 'MG', 'PH', 'UA', 'VN' ],
        'counties' :  [ '01', '02', '03', '04', '05', '06', '07', '08', '09', 
                        '10', '11', '12', '13', '14', '16', '17', '19',
                        '2A', '2B', '21', '22', '23', '24', '25', '26', '27', '28', '29',
                        '30', '31', '32', '33', '34', '35', '36', '38', '39',
                        '40', '41', '42', '43', '44', '45', '47', '48', '49',
                        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
                        '60','61','62','63','64','65','66','67','68','69',
                        '70','71','72','73','74','75','76','77','78','79',
                        '80','81','82','83','84','85','86','87','88','89',
                        '90','91','92','93','94','95' ]
    },
     */
    {
        'name' : 'Orchidée Adoption',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/les-operateurs-de-l-adoption-internationale/organismes-autorises-pour-l-adoption-oaa/article/orchidee-adoption',
        'countries' : [ 'TH' ],
        'counties' :  [ '01', '02', '03', '04', '05', '06', '07', '08', '09', 
                        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
                        '21', '22', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', 
                        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', 
                        '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', 
                        '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', 
                        '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', 
                        '90', '91', '92', '93', '94', '95']
    },
    {
        'name' : 'Païdia',
        'url' : 'http://www.diplomatie.gouv.fr/fr/adopter-a-l-etranger/les-acteurs-de-l-adoption-internationale/les-operateurs-de-l-adoption-internationale/organismes-autorises-pour-l-adoption-oaa/article/paidia',
        'countries' : [ 'ET', 'NE' ],
        'counties' :  [ '02', '59', '60', '62', '75', '80' ]
    },
    {
        'name' : 'Rayon de Soleil de l\'Enfant Étranger',
        'url' : 'http://rayondesoleil.net/',
        'countries' : [ 'CL', 'CN', 'KR', 'HT', 'IN' ],
        'counties' :  [ '01', '02', '03', '04', '05', '06', '07', '08', '09',
                        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
                        '2B', '21', '22', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', 
                        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', 
                        '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', 
                        '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', 
                        '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', 
                        '90', '91', '92', '93', '94', '95', 
                        '971']
    },
    {
        'name' : 'Renaître',
        'url' : 'http://www.adoption-renaitre.fr/',
        'countries' : [ 'CL', 'CO' ],
        'counties' :  [ '09', '11', '12', '31', '32', '34', '40', '47', 
                        '64', '65', '66', '81', '82', '85']
    },
    {
        'name' : 'Solidarité Fraternité',
        'url' : 'http://www.solidarite-fraternite.org/',
        'countries' : [ 'HT' ],
        'counties' :  [ '01', '02', '03', '04', '05', '06', '07', '08', '09', 
                        '10', '11', '12', '13', '14', '16', '17', '18', '19', 
                        '2A', '2B', '21', '22', '23', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', 
                        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', 
                        '50', '51', '52', '53', '54', '55', '56', '57',  
                        '60', '61', '62', '63', '64', '65', '66', '68', '69', 
                        '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', 
                        '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', 
                        '90', '91', '92', '93', '94', '95']
    },
    {
        'name' : 'Ti-Malice',
        'url' : 'http://www.timalice-adoption.com/',
        'countries' : [ 'HT' ],
        'counties' :  [ '03', '13', '16', '17', '18', '19', '23', '24', '29', 
                        '30', '35', '36', '40', '44', '46', '54', '56', '59', 
                        '60', '62', '63', '65', '79', '85', '86', '87', 
                        '93', '95', '973']
    }/*, Censure
    {
        'name' : 'Vivre en Famille',
        'url' : 'http://www.vivre-en-famille.fr/',
        'countries' : [ 'DJ', 'CF' ],
        'counties' :  [ '02', '04', '05', '06', '07', '08', 
                        '10', '11', '12', '13', '14', '16', '17', '18', '19', 
                        '2A', '21', '24', '25', '26', '27', '28', '29', 
                        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', 
                        '40', '41', '42', '44', '45', '46', '49', 
                        '50', '51', '52', '53', '54', '55', '56', '57', '59', 
                        '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', 
                        '70', '71', '72', '74', '75', '76', '77', '78', '79', 
                        '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', 
                        '90', '91', '92', '93', '94', '95', '974']
    }*/
];
