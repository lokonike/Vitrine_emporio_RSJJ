// =============================
// DADOS DOS PRODUTOS
// =============================

// array com todos os produtos, cada produto é um objeto com chave e valor
const PRODUCTS = [
    {"Cód.": "340", "Produto": "Açúcar Cristal Orgânico", "Classe Alimento": "AÇÚCAR", "Valor Kilo": 12.8, "Valor Grama": 1.28},
    {"Cód.": "4", "Produto": "Açúcar de Coco", "Classe Alimento": "AÇÚCAR", "Valor Kilo": 49.24, "Valor Grama": 4.924},
    {"Cód.": "5", "Produto": "Açucar Demerara", "Classe Alimento": "AÇÚCAR", "Valor Kilo": 11.28, "Valor Grama": 1.128},
    {"Cód.": "250", "Produto": "Açúcar Mascavo", "Classe Alimento": "AÇÚCAR", "Valor Kilo": 16.0, "Valor Grama": 1.6},
    {"Cód.": "6", "Produto": "Açucar Xylitol", "Classe Alimento": "AÇÚCAR", "Valor Kilo": 65.97, "Valor Grama": 6.597},
    {"Cód.": "304", "Produto": "Adoçante Eritritol", "Classe Alimento": "AÇÚCAR", "Valor Kilo": 50.0, "Valor Grama": 5.0},
    {"Cód.": "7", "Produto": "Adoçante Maltitiol", "Classe Alimento": "AÇÚCAR", "Valor Kilo": 43.63, "Valor Grama": 4.363},
    {"Cód.": "33", "Produto": "Anis Estrelado", "Classe Alimento": "AROMATICOS", "Valor Kilo": 117.72, "Valor Grama": 11.772},
    {"Cód.": "62", "Produto": "Canela Jawa em Casca", "Classe Alimento": "AROMATICOS", "Valor Kilo": 122.0, "Valor Grama": 12.2},
    {"Cód.": "63", "Produto": "Canela Po", "Classe Alimento": "AROMATICOS", "Valor Kilo": 58.59, "Valor Grama": 5.859},
    {"Cód.": "68", "Produto": "Cardamomo", "Classe Alimento": "AROMATICOS", "Valor Kilo": 320.4, "Valor Grama": 32.04},
    {"Cód.": "98", "Produto": "Cravo", "Classe Alimento": "AROMATICOS", "Valor Kilo": 154.8, "Valor Grama": 15.48},
    {"Cód.": "251", "Produto": "Cravo Pó", "Classe Alimento": "AROMATICOS", "Valor Kilo": 29.37, "Valor Grama": 2.937},
    {"Cód.": "237", "Produto": "Zimbro", "Classe Alimento": "AROMATICOS", "Valor Kilo": 56.1, "Valor Grama": 5.61},
    {"Cód.": "34", "Produto": "Arroz 7 Graos", "Classe Alimento": "CEREAL", "Valor Kilo": 25.4, "Valor Grama": 2.54},
    {"Cód.": "36", "Produto": "Arroz Preto", "Classe Alimento": "CEREAL", "Valor Kilo": 47.87, "Valor Grama": 4.787},
    {"Cód.": "37", "Produto": "Arroz Vermelho Grao Curto", "Classe Alimento": "CEREAL", "Valor Kilo": 26.18, "Valor Grama": 2.618},
    {"Cód.": "38", "Produto": "Aveia Flocos Fino", "Classe Alimento": "CEREAL", "Valor Kilo": 12.46, "Valor Grama": 1.246},
    {"Cód.": "39", "Produto": "Aveia Flocos Grosso", "Classe Alimento": "CEREAL", "Valor Kilo": 13.09, "Valor Grama": 1.309},
    {"Cód.": "111", "Produto": "Farelo de Aveia", "Classe Alimento": "CEREAL", "Valor Kilo": 15.58, "Valor Grama": 1.558},
    {"Cód.": "49", "Produto": "Granola Castanha", "Classe Alimento": "CEREAL", "Valor Kilo": 43.0, "Valor Grama": 4.3},
    {"Cód.": "143", "Produto": "Granola Crocante com Frutas", "Classe Alimento": "CEREAL", "Valor Kilo": 43.0, "Valor Grama": 4.3},
    {"Cód.": "31", "Produto": "Granola sem Açúcar", "Classe Alimento": "CEREAL", "Valor Kilo": 42.0, "Valor Grama": 4.2},
    {"Cód.": "89", "Produto": "Granola Tradicional", "Classe Alimento": "CEREAL", "Valor Kilo": 43.0, "Valor Grama": 4.3},
    {"Cód.": "202", "Produto": "Quinoa Flocos Branco", "Classe Alimento": "CEREAL", "Valor Kilo": 53.33, "Valor Grama": 5.333},
    {"Cód.": "255", "Produto": "Quinoa Grão Branco", "Classe Alimento": "CEREAL", "Valor Kilo": 47.2, "Valor Grama": 4.72},
    {"Cód.": "276", "Produto": "Quinoa Grão Preto", "Classe Alimento": "CEREAL", "Valor Kilo": 41.14, "Valor Grama": 4.114},
    {"Cód.": "221", "Produto": "Sucrilhos Choco Boll", "Classe Alimento": "CEREAL", "Valor Kilo": 38.0, "Valor Grama": 3.8},
    {"Cód.": "254", "Produto": "Sucrilhos com Açúcar", "Classe Alimento": "CEREAL", "Valor Kilo": 35.0, "Valor Grama": 3.5},
    {"Cód.": "222", "Produto": "Sucrilhos Corn Chocolate", "Classe Alimento": "CEREAL", "Valor Kilo": 35.1, "Valor Grama": 3.51},
    {"Cód.": "284", "Produto": "Sucrilhos Corn s/Açucar", "Classe Alimento": "CEREAL", "Valor Kilo": 40.0, "Valor Grama": 4.0},
    {"Cód.": "262", "Produto": "Sucrilhos Fruti", "Classe Alimento": "CEREAL", "Valor Kilo": 42.0, "Valor Grama": 4.2},
    {"Cód.": "40", "Produto": "Azeitona Preta com Caroço", "Classe Alimento": "CONSERVA", "Valor Kilo": 50.59, "Valor Grama": 5.059},
    {"Cód.": "401", "Produto": "Azeitona Preta com Caroço (AZAPA Grauda)", "Classe Alimento": "CONSERVA", "Valor Kilo": 95.0, "Valor Grama": 9.5},
    {"Cód.": "367", "Produto": "Azeitona Preta sem caroço", "Classe Alimento": "CONSERVA", "Valor Kilo": 63.0, "Valor Grama": 6.3},
    {"Cód.": "41", "Produto": "Azeitona Verde sem Caroço", "Classe Alimento": "CONSERVA", "Valor Kilo": 45.7, "Valor Grama": 4.57},
    {"Cód.": "82", "Produto": "Cerejas Vermelhas Calda com Talo", "Classe Alimento": "CONSERVA", "Valor Kilo": 101.92, "Valor Grama": 10.192},
    {"Cód.": "94", "Produto": "Cogumelo em Conserva", "Classe Alimento": "CONSERVA", "Valor Kilo": 49.56, "Valor Grama": 4.956},
    {"Cód.": "180", "Produto": "Pepino em Conserva", "Classe Alimento": "CONSERVA", "Valor Kilo": 32.72, "Valor Grama": 3.272},
    {"Cód.": "181", "Produto": "Pickles em Conserva", "Classe Alimento": "CONSERVA", "Valor Kilo": 24.65, "Valor Grama": 2.465},
    {"Cód.": "182", "Produto": "Pimenta Biquinho Conserva", "Classe Alimento": "CONSERVA", "Valor Kilo": 45.0, "Valor Grama": 4.5},
    {"Cód.": "278", "Produto": "Azeitona Verde com caroço", "Classe Alimento": "CONSERVA", "Valor Kilo": 37.99, "Valor Grama": 3.799},
    {"Cód.": "80", "Produto": "Cebolinha em Conserva", "Classe Alimento": "CONSERVA", "Valor Kilo": 30.86, "Valor Grama": 3.086},
    {"Cód.": "18", "Produto": "Amendoa Confeitada Branca", "Classe Alimento": "DOCE", "Valor Kilo": 56.1, "Valor Grama": 5.61},
    {"Cód.": "19", "Produto": "Amendoa Confeitada Colorida", "Classe Alimento": "DOCE", "Valor Kilo": 54.23, "Valor Grama": 5.423},
    {"Cód.": "9", "Produto": "Bala Cereja Azedinha", "Classe Alimento": "DOCE", "Valor Kilo": 24.4, "Valor Grama": 2.44},
    {"Cód.": "42", "Produto": "Bala Goma", "Classe Alimento": "DOCE", "Valor Kilo": 22.44, "Valor Grama": 2.244},
    {"Cód.": "73", "Produto": "Bala Goma Açai", "Classe Alimento": "DOCE", "Valor Kilo": 28.0, "Valor Grama": 2.8},
    {"Cód.": "43", "Produto": "Bala Goma Minhoca Azedinha", "Classe Alimento": "DOCE", "Valor Kilo": 31.0, "Valor Grama": 3.1},
    {"Cód.": "245", "Produto": "Bala Jujuba", "Classe Alimento": "DOCE", "Valor Kilo": 31.2, "Valor Grama": 3.12},
    {"Cód.": "238", "Produto": "Marshmallow Pipoca", "Classe Alimento": "DOCE", "Valor Kilo": 65.0, "Valor Grama": 6.5},
    {"Cód.": "238", "Produto": "Marshmallow Carinha Recheada", "Classe Alimento": "DOCE", "Valor Kilo": 65.0, "Valor Grama": 6.5},
    {"Cód.": "242", "Produto": "Confeti Grande", "Classe Alimento": "DOCE", "Valor Kilo": 116.9, "Valor Grama": 11.69},
    {"Cód.": "239", "Produto": "Confeti Pequeno", "Classe Alimento": "DOCE", "Valor Kilo": 71.9, "Valor Grama": 7.19},
    {"Cód.": "104", "Produto": "Drageado Chocolate ao Leite Banana", "Classe Alimento": "DOCE", "Valor Kilo": 150.4, "Valor Grama": 15.04},
    {"Cód.": "105", "Produto": "Drageado Chocolate ao Leite c/ Licor Cereja", "Classe Alimento": "DOCE", "Valor Kilo": 150.4, "Valor Grama": 15.04},
    {"Cód.": "314", "Produto": "Dragee Uva Passa", "Classe Alimento": "DOCE", "Valor Kilo": 150.4, "Valor Grama": 15.04},
    {"Cód.": "316", "Produto": "Bala de Goma Mix Azedinhas e Docinhas", "Classe Alimento": "DOCE", "Valor Kilo": 41.0, "Valor Grama": 4.1},
    {"Cód.": "2381", "Produto": "Fini Beijinho", "Classe Alimento": "DOCE", "Valor Kilo": 71.28, "Valor Grama": 7.128},
    {"Cód.": "2381", "Produto": "Fini Dentadura", "Classe Alimento": "DOCE", "Valor Kilo": 71.28, "Valor Grama": 7.128},
    {"Cód.": "2382", "Produto": "Fini Mix", "Classe Alimento": "DOCE", "Valor Kilo": 62.55, "Valor Grama": 6.255},
    {"Cód.": "310", "Produto": "Finni Sapinho", "Classe Alimento": "DOCE", "Valor Kilo": 82.62, "Valor Grama": 8.262},
    {"Cód.": "341", "Produto": "Finni T3", "Classe Alimento": "DOCE", "Valor Kilo": 67.9, "Valor Grama": 6.79},
    {"Cód.": "264", "Produto": "Pastilhas de Chocolate ao Leite", "Classe Alimento": "DOCE", "Valor Kilo": 55.0, "Valor Grama": 5.5},
    {"Cód.": "352", "Produto": "Gotas Chocolate Branco", "Classe Alimento": "DOCE", "Valor Kilo": 111.5, "Valor Grama": 11.15},
    {"Cód.": "353", "Produto": "Pastilhas de Chocolate Meio Amargo", "Classe Alimento": "DOCE", "Valor Kilo": 59.0, "Valor Grama": 5.9},
    {"Cód.": "228", "Produto": "Bolacha Nordestina Regalia / Coquinho / Palito", "Classe Alimento": "DOCE", "Valor Kilo": 25.0, "Valor Grama": 2.5},
    {"Cód.": "252", "Produto": "Amido de Milho", "Classe Alimento": "FARINHA", "Valor Kilo": 8.64, "Valor Grama": 0.864},
    {"Cód.": "60", "Produto": "Farinha de Amendôa", "Classe Alimento": "FARINHA", "Valor Kilo": 99.0, "Valor Grama": 9.9},
    {"Cód.": "112", "Produto": "Farinha de Amendoim", "Classe Alimento": "FARINHA", "Valor Kilo": 19.9, "Valor Grama": 1.99},
    {"Cód.": "113", "Produto": "Farinha de Arroz Branca", "Classe Alimento": "FARINHA", "Valor Kilo": 11.52, "Valor Grama": 1.152},
    {"Cód.": "115", "Produto": "Farinha de Arroz Integral", "Classe Alimento": "FARINHA", "Valor Kilo": 14.0, "Valor Grama": 1.4},
    {"Cód.": "67", "Produto": "Farinha de Aveia", "Classe Alimento": "FARINHA", "Valor Kilo": 22.8, "Valor Grama": 2.28},
    {"Cód.": "61", "Produto": "Farinha de Banana Verde", "Classe Alimento": "FARINHA", "Valor Kilo": 27.0, "Valor Grama": 2.7},
    {"Cód.": "116", "Produto": "Farinha de Batata Doce", "Classe Alimento": "FARINHA", "Valor Kilo": 25.0, "Valor Grama": 2.5},
    {"Cód.": "117", "Produto": "Farinha de Berinjela", "Classe Alimento": "FARINHA", "Valor Kilo": 62.39, "Valor Grama": 6.239},
    {"Cód.": "274", "Produto": "Farinha de Chia", "Classe Alimento": "FARINHA", "Valor Kilo": 17.05, "Valor Grama": 1.705},
    {"Cód.": "118", "Produto": "Farinha de Coco s/casca", "Classe Alimento": "FARINHA", "Valor Kilo": 30.52, "Valor Grama": 3.052},
    {"Cód.": "275", "Produto": "Farinha de Feijão branco", "Classe Alimento": "FARINHA", "Valor Kilo": 19.47, "Valor Grama": 1.947},
    {"Cód.": "119", "Produto": "Farinha de Linhaça Dourada", "Classe Alimento": "FARINHA", "Valor Kilo": 21.19, "Valor Grama": 2.119},
    {"Cód.": "120", "Produto": "Farinha de Linhaça Marrom", "Classe Alimento": "FARINHA", "Valor Kilo": 18.7, "Valor Grama": 1.87},
    {"Cód.": "246", "Produto": "Farinha de Mandioca Copioba", "Classe Alimento": "FARINHA", "Valor Kilo": 18.7, "Valor Grama": 1.87},
    {"Cód.": "326", "Produto": "Farinha de Mandioca Fina", "Classe Alimento": "FARINHA", "Valor Kilo": 10.4, "Valor Grama": 1.04},
    {"Cód.": "327", "Produto": "Farinha de Mandioca Quebradinha", "Classe Alimento": "FARINHA", "Valor Kilo": 17.44, "Valor Grama": 1.744},
    {"Cód.": "256", "Produto": "Farinha de Maracujá", "Classe Alimento": "FARINHA", "Valor Kilo": 24.59, "Valor Grama": 2.459},
    {"Cód.": "321", "Produto": "Farinha de Milho", "Classe Alimento": "FARINHA", "Valor Kilo": 30.6, "Valor Grama": 3.06},
    {"Cód.": "121", "Produto": "Farinha de Rosca Verona", "Classe Alimento": "FARINHA", "Valor Kilo": 13.48, "Valor Grama": 1.348},
    {"Cód.": "122", "Produto": "Farinha de Tapioca Granulada", "Classe Alimento": "FARINHA", "Valor Kilo": 18.7, "Valor Grama": 1.87},
    {"Cód.": "123", "Produto": "Farinha de Trigo Integral Fina", "Classe Alimento": "FARINHA", "Valor Kilo": 9.72, "Valor Grama": 0.972},
    {"Cód.": "360", "Produto": "Farinha de Uva", "Classe Alimento": "FARINHA", "Valor Kilo": 39.5, "Valor Grama": 3.95},
    {"Cód.": "124", "Produto": "Farinha Mandioca Dagua", "Classe Alimento": "FARINHA", "Valor Kilo": 18.7, "Valor Grama": 1.87},
    {"Cód.": "125", "Produto": "Farinha Mandioca Grossa", "Classe Alimento": "FARINHA", "Valor Kilo": 9.4, "Valor Grama": 0.94},
    {"Cód.": "126", "Produto": "Farinha Panko", "Classe Alimento": "FARINHA", "Valor Kilo": 46.0, "Valor Grama": 4.6},
    {"Cód.": "285", "Produto": "Fécula de Batata Microamido", "Classe Alimento": "FARINHA", "Valor Kilo": 16.01, "Valor Grama": 1.601},
    {"Cód.": "134", "Produto": "Flocos Milho Pre Cozido", "Classe Alimento": "FARINHA", "Valor Kilo": 12.16, "Valor Grama": 1.216},
    {"Cód.": "136", "Produto": "Fubá Italiano TP1", "Classe Alimento": "FARINHA", "Valor Kilo": 6.28, "Valor Grama": 0.628},
    {"Cód.": "203", "Produto": "Fubá Mimoso", "Classe Alimento": "FARINHA", "Valor Kilo": 7.0, "Valor Grama": 0.7},
    {"Cód.": "291", "Produto": "Germen de Trigo", "Classe Alimento": "FARINHA", "Valor Kilo": 37.8, "Valor Grama": 3.78},
    {"Cód.": "313", "Produto": "Ligante para Empanar", "Classe Alimento": "FARINHA", "Valor Kilo": 31.5, "Valor Grama": 3.15},
    {"Cód.": "253", "Produto": "Polvilho de Mandioca Azedo", "Classe Alimento": "FARINHA", "Valor Kilo": 18.0, "Valor Grama": 1.8},
    {"Cód.": "192", "Produto": "Polvilho Doce", "Classe Alimento": "FARINHA", "Valor Kilo": 18.0, "Valor Grama": 1.8},
    {"Cód.": "277", "Produto": "Sucrilhos Micro Rice Boll (Flocos de Arroz)", "Classe Alimento": "FARINHA", "Valor Kilo": 32.0, "Valor Grama": 3.2},
    {"Cód.": "324", "Produto": "Farinha de Milho Flocada", "Classe Alimento": "FARINHA", "Valor Kilo": 20.0, "Valor Grama": 2.0},
    {"Cód.": "331", "Produto": "Abacaxi Cristalizado", "Classe Alimento": "FRUTA", "Valor Kilo": 86.4, "Valor Grama": 8.64},
    {"Cód.": "1", "Produto": "Abacaxi Desidratado", "Classe Alimento": "FRUTA", "Valor Kilo": 136.53, "Valor Grama": 13.653},
    {"Cód.": "266", "Produto": "Ameixa sem Caroço", "Classe Alimento": "FRUTA", "Valor Kilo": 52.85, "Valor Grama": 5.285},
    {"Cód.": "248", "Produto": "Banana Passa", "Classe Alimento": "FRUTA", "Valor Kilo": 54.0, "Valor Grama": 5.4},
    {"Cód.": "46", "Produto": "Bananinha Cristalizada", "Classe Alimento": "FRUTA", "Valor Kilo": 59.84, "Valor Grama": 5.984},
    {"Cód.": "97", "Produto": "Cranberry", "Classe Alimento": "FRUTA", "Valor Kilo": 78.66, "Valor Grama": 7.866},
    {"Cód.": "101", "Produto": "Damasco Turco", "Classe Alimento": "FRUTA", "Valor Kilo": 102.0, "Valor Grama": 10.2},
    {"Cód.": "271", "Produto": "Figo Turco", "Classe Alimento": "FRUTA", "Valor Kilo": 71.98, "Valor Grama": 7.198},
    {"Cód.": "135", "Produto": "Frutas Cristalizadas", "Classe Alimento": "FRUTA", "Valor Kilo": 22.9, "Valor Grama": 2.29},
    {"Cód.": "138", "Produto": "Gengibre Cristalizado", "Classe Alimento": "FRUTA", "Valor Kilo": 91.73, "Valor Grama": 9.173},
    {"Cód.": "147", "Produto": "Laranja Desidratada", "Classe Alimento": "FRUTA", "Valor Kilo": 124.0, "Valor Grama": 12.4},
    {"Cód.": "153", "Produto": "Limao Desidratado", "Classe Alimento": "FRUTA", "Valor Kilo": 71.08, "Valor Grama": 7.108},
    {"Cód.": "154", "Produto": "Limao Cristalizado", "Classe Alimento": "FRUTA", "Valor Kilo": 54.23, "Valor Grama": 5.423},
    {"Cód.": "158", "Produto": "Maça Desidratada", "Classe Alimento": "FRUTA", "Valor Kilo": 100.98, "Valor Grama": 10.098},
    {"Cód.": "165", "Produto": "Manga Desidratada", "Classe Alimento": "FRUTA", "Valor Kilo": 149.6, "Valor Grama": 14.96},
    {"Cód.": "171", "Produto": "Mix Frutas", "Classe Alimento": "FRUTA", "Valor Kilo": 102.1, "Valor Grama": 10.21},
    {"Cód.": "173", "Produto": "Morango Desidratado Glaceado", "Classe Alimento": "FRUTA", "Valor Kilo": 86.58, "Valor Grama": 8.658},
    {"Cód.": "328", "Produto": "Tamara c/caroço", "Classe Alimento": "FRUTA", "Valor Kilo": 55.8, "Valor Grama": 5.58},
    {"Cód.": "224", "Produto": "Tamara s/caroço", "Classe Alimento": "FRUTA", "Valor Kilo": 43.38, "Valor Grama": 4.338},
    {"Cód.": "232", "Produto": "Uva Passa Branca", "Classe Alimento": "FRUTA", "Valor Kilo": 56.39, "Valor Grama": 5.639},
    {"Cód.": "233", "Produto": "Uva Passa Preta Argentina", "Classe Alimento": "FRUTA", "Valor Kilo": 44.0, "Valor Grama": 4.4},
    {"Cód.": "363", "Produto": "Uva Passa Preta Chilena", "Classe Alimento": "FRUTA", "Valor Kilo": 44.0, "Valor Grama": 4.4},
    {"Cód.": "92", "Produto": "Coco Flocos Grosso sem Açucar", "Classe Alimento": "FRUTA", "Valor Kilo": 69.0, "Valor Grama": 6.9},
    {"Cód.": "76", "Produto": "Coco Ralado Flocos Finos", "Classe Alimento": "FRUTA", "Valor Kilo": 31.75, "Valor Grama": 3.175},
    {"Cód.": "90", "Produto": "Coco Chips c/Borda", "Classe Alimento": "FRUTA", "Valor Kilo": 86.95, "Valor Grama": 8.695},
    {"Cód.": "91", "Produto": "Coco Chips sem Borda", "Classe Alimento": "FRUTA", "Valor Kilo": 65.5, "Valor Grama": 6.55},
    {"Cód.": "265", "Produto": "Arroz Integral Branco TP1", "Classe Alimento": "GRAO", "Valor Kilo": 14.4, "Valor Grama": 1.44},
    {"Cód.": "65", "Produto": "Canjica Branca", "Classe Alimento": "GRAO", "Valor Kilo": 15.33, "Valor Grama": 1.533},
    {"Cód.": "66", "Produto": "Canjiquinha", "Classe Alimento": "GRAO", "Valor Kilo": 5.61, "Valor Grama": 0.561},
    {"Cód.": "350", "Produto": "Canjiquinha Média (Quirela)", "Classe Alimento": "GRAO", "Valor Kilo": 5.29, "Valor Grama": 0.529},
    {"Cód.": "110", "Produto": "Ervilha Can. Partida TP1", "Classe Alimento": "GRAO", "Valor Kilo": 14.96, "Valor Grama": 1.496},
    {"Cód.": "357", "Produto": "Ervilha Inteira", "Classe Alimento": "GRAO", "Valor Kilo": 16.2, "Valor Grama": 1.62},
    {"Cód.": "127", "Produto": "Fava Branca Nacional TP1", "Classe Alimento": "GRAO", "Valor Kilo": 24.31, "Valor Grama": 2.431},
    {"Cód.": "128", "Produto": "Fava Rajada Vermelha TP1", "Classe Alimento": "GRAO", "Valor Kilo": 24.31, "Valor Grama": 2.431},
    {"Cód.": "211", "Produto": "Feijão Bolinha TP1", "Classe Alimento": "GRAO", "Valor Kilo": 17.64, "Valor Grama": 1.764},
    {"Cód.": "129", "Produto": "Feijao Branco Imp. TP1", "Classe Alimento": "GRAO", "Valor Kilo": 28.0, "Valor Grama": 2.8},
    {"Cód.": "130", "Produto": "Feijão Carioca", "Classe Alimento": "GRAO", "Valor Kilo": 10.01, "Valor Grama": 1.001},
    {"Cód.": "131", "Produto": "Feijao Corda s/Verde TP1", "Classe Alimento": "GRAO", "Valor Kilo": 15.0, "Valor Grama": 1.5},
    {"Cód.": "132", "Produto": "Feijão Fradinho", "Classe Alimento": "GRAO", "Valor Kilo": 12.6, "Valor Grama": 1.26},
    {"Cód.": "133", "Produto": "Feijão Preto", "Classe Alimento": "GRAO", "Valor Kilo": 12.24, "Valor Grama": 1.224},
    {"Cód.": "144", "Produto": "Grão Bico Mexico 12mm", "Classe Alimento": "GRAO", "Valor Kilo": 30.96, "Valor Grama": 3.096},
    {"Cód.": "151", "Produto": "Lentilha Canada TP1", "Classe Alimento": "GRAO", "Valor Kilo": 35.0, "Valor Grama": 3.5},
    {"Cód.": "229", "Produto": "Trigo para Kibe", "Classe Alimento": "GRAO", "Valor Kilo": 13.84, "Valor Grama": 1.384},
    {"Cód.": "190", "Produto": "Milho Pipoca", "Classe Alimento": "GRAO", "Valor Kilo": 9.72, "Valor Grama": 0.972},
    {"Cód.": "161", "Produto": "Macarrao Espiral Bicolor", "Classe Alimento": "MACARRAO", "Valor Kilo": 20.57, "Valor Grama": 2.057},
    {"Cód.": "212", "Produto": "Macarrão Integral Espaguete", "Classe Alimento": "MACARRAO", "Valor Kilo": 18.9, "Valor Grama": 1.89},
    {"Cód.": "162", "Produto": "Macarrao Integral Esperil Batata Doce", "Classe Alimento": "MACARRAO", "Valor Kilo": 34.8, "Valor Grama": 3.48},
    {"Cód.": "163", "Produto": "Macarrao Integral Penne Beterraba", "Classe Alimento": "MACARRAO", "Valor Kilo": 22.44, "Valor Grama": 2.244},
    {"Cód.": "164", "Produto": "Macarrao Integral Penne Espinafre", "Classe Alimento": "MACARRAO", "Valor Kilo": 23.6, "Valor Grama": 2.36},
    {"Cód.": "20", "Produto": "Amendoa Crua s/ Casca", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 102.0, "Valor Grama": 10.2},
    {"Cód.": "21", "Produto": "Amendoa Defumada", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 127.0, "Valor Grama": 12.7},
    {"Cód.": "22", "Produto": "Amendoa Laminada", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 114.0, "Valor Grama": 11.4},
    {"Cód.": "170", "Produto": "Amendôa Tor. Com sal", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 72.41, "Valor Grama": 7.241},
    {"Cód.": "319", "Produto": "Amendoa Torrada s/sal", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 126.0, "Valor Grama": 12.6},
    {"Cód.": "23", "Produto": "Amendoim Xerem", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 24.0, "Valor Grama": 2.4},
    {"Cód.": "53", "Produto": "Amendoim Bolinha", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 27.2, "Valor Grama": 2.72},
    {"Cód.": "241", "Produto": "Amendoim Bolinha Chocolate", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 32.8, "Valor Grama": 3.28},
    {"Cód.": "210", "Produto": "Amendoim Conf. Chocolate Branco", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 21.6, "Valor Grama": 2.16},
    {"Cód.": "24", "Produto": "Amendoim Crocante Bacon", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 36.4, "Valor Grama": 3.64},
    {"Cód.": "362", "Produto": "Amendoim Crocante Churrasco", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 26.93, "Valor Grama": 2.693},
    {"Cód.": "25", "Produto": "Amendoim Crocante Picante", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 36.4, "Valor Grama": 3.64},
    {"Cód.": "27", "Produto": "Amendoim Crocante Salsa/Cebola", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 36.4, "Valor Grama": 3.64},
    {"Cód.": "28", "Produto": "Amendoim Doce Caramelizado", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 23.4, "Valor Grama": 2.34},
    {"Cód.": "17", "Produto": "Amendoim Doce Colorido", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 26.84, "Valor Grama": 2.684},
    {"Cód.": "52", "Produto": "Amendoim Doce Praline", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 32.0, "Valor Grama": 3.2},
    {"Cód.": "29", "Produto": "Amendoim Frito com Alho", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 33.6, "Valor Grama": 3.36},
    {"Cód.": "30", "Produto": "Amendoim Grao Cru Runner com Pele", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 20.4, "Valor Grama": 2.04},
    {"Cód.": "269", "Produto": "Amendoim Japonês", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 36.4, "Valor Grama": 3.64},
    {"Cód.": "325", "Produto": "Amendoim Torrado s/pele e c/sal", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 24.0, "Valor Grama": 2.4},
    {"Cód.": "267", "Produto": "Amendoim Torrado s/pele e s/sal", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 24.0, "Valor Grama": 2.4},
    {"Cód.": "270", "Produto": "Avelã s/casca", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 97.2, "Valor Grama": 9.72},
    {"Cód.": "69", "Produto": "Castanha Caju Caramelizada", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 90.0, "Valor Grama": 9.0},
    {"Cód.": "322", "Produto": "Cacau em Pó 70%", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 66.66, "Valor Grama": 6.666},
    {"Cód.": "70", "Produto": "Castanha Caju Torrada c/ Sal", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 127.0, "Valor Grama": 12.7},
    {"Cód.": "71", "Produto": "Castanha Caju Torrada s/ Sal", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 127.0, "Valor Grama": 12.7},
    {"Cód.": "84", "Produto": "Castanha do Pará Quebrada", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 125.35, "Valor Grama": 12.535},
    {"Cód.": "72", "Produto": "Castanha Mix", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 79.09, "Valor Grama": 7.909},
    {"Cód.": "74", "Produto": "Castanha Pará Média", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 129.35, "Valor Grama": 12.935},
    {"Cód.": "332", "Produto": "Xerem de Castanha de Cajú", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 68.0, "Valor Grama": 6.8},
    {"Cód.": "174", "Produto": "Nozes Mariposas", "Classe Alimento": "OLEOGINOSAS", "Valor Kilo": 120.0, "Valor Grama": 12.0},
    {"Cód.": "55", "Produto": "Cacau Po Alcalino", "Classe Alimento": "OUTROS", "Valor Kilo": 21.2, "Valor Grama": 2.12},
    {"Cód.": "56", "Produto": "Cacau Po Natural", "Classe Alimento": "OUTROS", "Valor Kilo": 21.6, "Valor Grama": 2.16},
    {"Cód.": "243", "Produto": "Carne seca", "Classe Alimento": "OUTROS", "Valor Kilo": 65.0, "Valor Grama": 6.5},
    {"Cód.": "88", "Produto": "Chocolate Po 70%", "Classe Alimento": "OUTROS", "Valor Kilo": 57.34, "Valor Grama": 5.734},
    {"Cód.": "296", "Produto": "Gelatina", "Classe Alimento": "OUTROS", "Valor Kilo": 126.54, "Valor Grama": 12.654},
    {"Cód.": "139", "Produto": "Gengibre Po", "Classe Alimento": "OUTROS", "Valor Kilo": 47.33, "Valor Grama": 4.733},
    {"Cód.": "348", "Produto": "Goma Xantana", "Classe Alimento": "OUTROS", "Valor Kilo": 107.1, "Valor Grama": 10.71},
    {"Cód.": "263", "Produto": "Proteína de Soja Caramelo Tiras", "Classe Alimento": "OUTROS", "Valor Kilo": 99.0, "Valor Grama": 9.9},
    {"Cód.": "193", "Produto": "Proteina Soja Almondega Caramelo", "Classe Alimento": "OUTROS", "Valor Kilo": 39.29, "Valor Grama": 3.929},
    {"Cód.": "194", "Produto": "Proteina Soja Calabresa", "Classe Alimento": "OUTROS", "Valor Kilo": 50.49, "Valor Grama": 5.049},
    {"Cód.": "195", "Produto": "Proteina Soja Caramelo 35mm", "Classe Alimento": "OUTROS", "Valor Kilo": 28.0, "Valor Grama": 2.8},
    {"Cód.": "196", "Produto": "Proteina Soja Caramelo Fatias", "Classe Alimento": "OUTROS", "Valor Kilo": 46.75, "Valor Grama": 4.675},
    {"Cód.": "197", "Produto": "Proteina Soja Granulada Bacon", "Classe Alimento": "OUTROS", "Valor Kilo": 48.62, "Valor Grama": 4.862},
    {"Cód.": "198", "Produto": "Proteina Soja Natural 35mm", "Classe Alimento": "OUTROS", "Valor Kilo": 28.0, "Valor Grama": 2.8},
    {"Cód.": "199", "Produto": "Proteina Soja Natural Fatias", "Classe Alimento": "OUTROS", "Valor Kilo": 46.75, "Valor Grama": 4.675},
    {"Cód.": "206", "Produto": "Sagu Perola", "Classe Alimento": "OUTROS", "Valor Kilo": 19.9, "Valor Grama": 1.99},
    {"Cód.": "1003", "Produto": "Mussarela Búfala", "Classe Alimento": "QUEIJO", "Valor Kilo": 65.0, "Valor Grama": 6.5},
    {"Cód.": "1002", "Produto": "Queijo", "Classe Alimento": "QUEIJO", "Valor Kilo": 64.8, "Valor Grama": 6.48},
    {"Cód.": "1007", "Produto": "Requeijão", "Classe Alimento": "QUEIJO", "Valor Kilo": 73.1, "Valor Grama": 7.31},
    {"Cód.": "1004", "Produto": "Ricota", "Classe Alimento": "QUEIJO", "Valor Kilo": 27.0, "Valor Grama": 2.7},
    {"Cód.": "1006", "Produto": "Trança", "Classe Alimento": "QUEIJO", "Valor Kilo": 78.2, "Valor Grama": 7.82},
    {"Cód.": "48", "Produto": "Bicarbonato de Sódio", "Classe Alimento": "SAL", "Valor Kilo": 12.92, "Valor Grama": 1.292},
    {"Cód.": "309", "Produto": "Sal Marinho Iodado Fino", "Classe Alimento": "SAL", "Valor Kilo": 4.68, "Valor Grama": 0.468},
    {"Cód.": "364", "Produto": "Sal Marinho Iodado Grosso", "Classe Alimento": "SAL", "Valor Kilo": 3.5, "Valor Grama": 0.35},
    {"Cód.": "108", "Produto": "Sal Parrilla", "Classe Alimento": "SAL", "Valor Kilo": 9.18, "Valor Grama": 0.918},
    {"Cód.": "355", "Produto": "Sal Parrilla assador", "Classe Alimento": "SAL", "Valor Kilo": 45.9, "Valor Grama": 4.59},
    {"Cód.": "307", "Produto": "Sal Parrilla Chimichurri", "Classe Alimento": "SAL", "Valor Kilo": 9.79, "Valor Grama": 0.979},
    {"Cód.": "308", "Produto": "Sal Parrilla Defumado", "Classe Alimento": "SAL", "Valor Kilo": 9.79, "Valor Grama": 0.979},
    {"Cód.": "207", "Produto": "Sal Rosa Fino", "Classe Alimento": "SAL", "Valor Kilo": 8.6, "Valor Grama": 0.86},
    {"Cód.": "208", "Produto": "Sal Rosa Grosso", "Classe Alimento": "SAL", "Valor Kilo": 8.6, "Valor Grama": 0.86},
    {"Cód.": "335", "Produto": "Glutamato Monossódico", "Classe Alimento": "SAL", "Valor Kilo": 48.98, "Valor Grama": 4.898},
    {"Cód.": "85", "Produto": "Chia", "Classe Alimento": "SEMENTES", "Valor Kilo": 44.03, "Valor Grama": 4.403},
    {"Cód.": "140", "Produto": "Gergelim Branco c/casca", "Classe Alimento": "SEMENTES", "Valor Kilo": 25.6, "Valor Grama": 2.56},
    {"Cód.": "141", "Produto": "Gergelim Branco s/casca", "Classe Alimento": "SEMENTES", "Valor Kilo": 40.35, "Valor Grama": 4.035},
    {"Cód.": "146", "Produto": "Gergelim Preto", "Classe Alimento": "SEMENTES", "Valor Kilo": 35.26, "Valor Grama": 3.526},
    {"Cód.": "155", "Produto": "Linhaça Dourada TP1", "Classe Alimento": "SEMENTES", "Valor Kilo": 22.8, "Valor Grama": 2.28},
    {"Cód.": "156", "Produto": "Linhaça Marrom TP1", "Classe Alimento": "SEMENTES", "Valor Kilo": 15.71, "Valor Grama": 1.571},
    {"Cód.": "176", "Produto": "Pepita de Girassol s/sal", "Classe Alimento": "SEMENTES", "Valor Kilo": 23.38, "Valor Grama": 2.338},
    {"Cód.": "201", "Produto": "Pepita de Girassol Torrada c/sal", "Classe Alimento": "SEMENTES", "Valor Kilo": 37.18, "Valor Grama": 3.718},
    {"Cód.": "219", "Produto": "Semente de Abobora Crua s/casca s/sal", "Classe Alimento": "SEMENTES", "Valor Kilo": 80.0, "Valor Grama": 8.0},
    {"Cód.": "220", "Produto": "Semente de Abobora torrada s/ casca c/sal", "Classe Alimento": "SEMENTES", "Valor Kilo": 93.0, "Valor Grama": 9.3},
    {"Cód.": "343", "Produto": "Semente de Branca com Sal", "Classe Alimento": "SEMENTES", "Valor Kilo": 88.7, "Valor Grama": 8.87},
    {"Cód.": "44", "Produto": "Banana Chips Doce", "Classe Alimento": "SNACKS", "Valor Kilo": 90.7, "Valor Grama": 9.07},
    {"Cód.": "45", "Produto": "Banana Chips Salgada", "Classe Alimento": "SNACKS", "Valor Kilo": 80.0, "Valor Grama": 8.0},
    {"Cód.": "300", "Produto": "Batata Chips Salsa/Cebola", "Classe Alimento": "SNACKS", "Valor Kilo": 97.2, "Valor Grama": 9.72},
    {"Cód.": "334", "Produto": "Batata Doce Chips Mix", "Classe Alimento": "SNACKS", "Valor Kilo": 97.74, "Valor Grama": 9.774},
    {"Cód.": "204", "Produto": "Batata Rústica Paprica", "Classe Alimento": "SNACKS", "Valor Kilo": 93.6, "Valor Grama": 9.36},
    {"Cód.": "272", "Produto": "Biscoito de Arroz c/tomate picante", "Classe Alimento": "SNACKS", "Valor Kilo": 55.44, "Valor Grama": 5.544},
    {"Cód.": "259", "Produto": "Grão de Bico Tostado", "Classe Alimento": "SNACKS", "Valor Kilo": 49.56, "Valor Grama": 4.956},
    {"Cód.": "301", "Produto": "Grão de Bico Tostado c/ Mostarda e Mel", "Classe Alimento": "SNACKS", "Valor Kilo": 64.8, "Valor Grama": 6.48},
    {"Cód.": "330", "Produto": "Inhame Chips", "Classe Alimento": "SNACKS", "Valor Kilo": 140.4, "Valor Grama": 14.04},
    {"Cód.": "315", "Produto": "Mandioca Chips", "Classe Alimento": "SNACKS", "Valor Kilo": 88.33, "Valor Grama": 8.833},
    {"Cód.": "168", "Produto": "Milho Espanhol Mostarda e Mel", "Classe Alimento": "SNACKS", "Valor Kilo": 70.0, "Valor Grama": 7.0},
    {"Cód.": "257", "Produto": "Mix de Vegetais", "Classe Alimento": "SNACKS", "Valor Kilo": 111.0, "Valor Grama": 11.1},
    {"Cód.": "216", "Produto": "Pistache Torrado com sal", "Classe Alimento": "SNACKS", "Valor Kilo": 145.35, "Valor Grama": 14.535},
    {"Cód.": "351", "Produto": "Rosquinha com Amendoim veg. s/lactose", "Classe Alimento": "SNACKS", "Valor Kilo": 105.0, "Valor Grama": 10.5},
    {"Cód.": "351", "Produto": "Rosquinha com Coco veg. s/lactose", "Classe Alimento": "SNACKS", "Valor Kilo": 105.0, "Valor Grama": 10.5},
    {"Cód.": "366", "Produto": "Rosquinha com gergelim veg. s/lactose", "Classe Alimento": "SNACKS", "Valor Kilo": 105.0, "Valor Grama": 10.5},
    {"Cód.": "317", "Produto": "Salgadinho Argola Frango", "Classe Alimento": "SNACKS", "Valor Kilo": 44.88, "Valor Grama": 4.488},
    {"Cód.": "317", "Produto": "Salgadinho Argola Requeijão / Frango", "Classe Alimento": "SNACKS", "Valor Kilo": 44.88, "Valor Grama": 4.488},
    {"Cód.": "215", "Produto": "Salgadinho Bolinha Bacon", "Classe Alimento": "SNACKS", "Valor Kilo": 24.5, "Valor Grama": 2.45},
    {"Cód.": "209", "Produto": "Salgadinho Calabresa", "Classe Alimento": "SNACKS", "Valor Kilo": 24.5, "Valor Grama": 2.45},
    {"Cód.": "209", "Produto": "Salgadinho de camarrão", "Classe Alimento": "SNACKS", "Valor Kilo": 24.5, "Valor Grama": 2.45},
    {"Cód.": "209", "Produto": "Salgadinho Pimenta Mex.", "Classe Alimento": "SNACKS", "Valor Kilo": 19.8, "Valor Grama": 1.98},
    {"Cód.": "213", "Produto": "Salgadinho Pizza", "Classe Alimento": "SNACKS", "Valor Kilo": 20.57, "Valor Grama": 2.057},
    {"Cód.": "214", "Produto": "Salgadinho Queijo", "Classe Alimento": "SNACKS", "Valor Kilo": 20.57, "Valor Grama": 2.057},
    {"Cód.": "217", "Produto": "Salgadinho Salsa/Cebola", "Classe Alimento": "SNACKS", "Valor Kilo": 45.0, "Valor Grama": 4.5},
    {"Cód.": "260", "Produto": "Sembei ao Leite", "Classe Alimento": "SNACKS", "Valor Kilo": 101.5, "Valor Grama": 10.15},
    {"Cód.": "260", "Produto": "Sembei Aveia/Banana e Mel", "Classe Alimento": "SNACKS", "Valor Kilo": 101.5, "Valor Grama": 10.15},
    {"Cód.": "260", "Produto": "Sembei Gergelim", "Classe Alimento": "SNACKS", "Valor Kilo": 101.5, "Valor Grama": 10.15},
    {"Cód.": "273", "Produto": "Soja Natural Torrada c/sal", "Classe Alimento": "SNACKS", "Valor Kilo": 33.74, "Valor Grama": 3.374},
    {"Cód.": "51", "Produto": "Torresmo", "Classe Alimento": "SNACKS", "Valor Kilo": 70.0, "Valor Grama": 7.0},
    {"Cód.": "354", "Produto": "Aro de Cebola", "Classe Alimento": "SNACKS", "Valor Kilo": 100.0, "Valor Grama": 10.0},
    {"Cód.": "3", "Produto": "Açai Po", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 153.34, "Valor Grama": 15.334},
    {"Cód.": "8", "Produto": "Albumina Po", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 172.61, "Valor Grama": 17.261},
    {"Cód.": "47", "Produto": "BCAA-Leucina, Isoleucina, Valina", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 316.91, "Valor Grama": 31.691},
    {"Cód.": "75", "Produto": "Catuaba", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 21.2, "Valor Grama": 2.12},
    {"Cód.": "83", "Produto": "Cha Detox Verde", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 100.98, "Valor Grama": 10.098},
    {"Cód.": "95", "Produto": "Colageno Hidrolisado", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 147.73, "Valor Grama": 14.773},
    {"Cód.": "99", "Produto": "Creatina Monohidratada", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 214.2, "Valor Grama": 21.42},
    {"Cód.": "281", "Produto": "Espirulina Pó", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 86.0, "Valor Grama": 8.6},
    {"Cód.": "280", "Produto": "Extrato de Soja", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 30.0, "Valor Grama": 3.0},
    {"Cód.": "298", "Produto": "Farinha de Beterraba", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 135.37, "Valor Grama": 13.537},
    {"Cód.": "299", "Produto": "Fibra de Maça", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 81.0, "Valor Grama": 8.1},
    {"Cód.": "294", "Produto": "Ginkgo Biloba", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 75.65, "Valor Grama": 7.565},
    {"Cód.": "295", "Produto": "Ginseng", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 30.55, "Valor Grama": 3.055},
    {"Cód.": "142", "Produto": "Glutamina", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 187.0, "Valor Grama": 18.7},
    {"Cód.": "145", "Produto": "Guarana Po", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 42.1, "Valor Grama": 4.21},
    {"Cód.": "279", "Produto": "Leite de Côco em Pó", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 53.84, "Valor Grama": 5.384},
    {"Cód.": "148", "Produto": "Leite Po Desnatado", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 64.82, "Valor Grama": 6.482},
    {"Cód.": "149", "Produto": "Leite Po Integral", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 66.0, "Valor Grama": 6.6},
    {"Cód.": "150", "Produto": "Leite Po Integral Zero Lactose", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 81.03, "Valor Grama": 8.103},
    {"Cód.": "152", "Produto": "Levedura de Cerveja", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 71.5, "Valor Grama": 7.15},
    {"Cód.": "159", "Produto": "Maca Peruana", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 59.84, "Valor Grama": 5.984},
    {"Cód.": "160", "Produto": "Maca Peruana Negra", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 184.2, "Valor Grama": 18.42},
    {"Cód.": "289", "Produto": "Maca Peruana Vermelha", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 184.2, "Valor Grama": 18.42},
    {"Cód.": "297", "Produto": "Maltodextrina", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 39.49, "Valor Grama": 3.949},
    {"Cód.": "292", "Produto": "Maltodextrina+Guaraná", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 54.0, "Valor Grama": 5.4},
    {"Cód.": "35", "Produto": "Moringa em Pó", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 100.0, "Valor Grama": 10.0},
    {"Cód.": "358", "Produto": "Massa Turbo Baunilha", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 57.94, "Valor Grama": 5.794},
    {"Cód.": "359", "Produto": "Massa Turbo Chocolate", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 57.94, "Valor Grama": 5.794},
    {"Cód.": "356", "Produto": "Pré Treino", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 164.7, "Valor Grama": 16.47},
    {"Cód.": "200", "Produto": "Psyllium", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 139.16, "Valor Grama": 13.916},
    {"Cód.": "249", "Produto": "Tribulus Terrestris", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 102.6, "Valor Grama": 10.26},
    {"Cód.": "345", "Produto": "Whey + Creatina Baunilha", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 143.0, "Valor Grama": 14.3},
    {"Cód.": "230", "Produto": "Whey Protein Baunilha", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 148.66, "Valor Grama": 14.866},
    {"Cód.": "288", "Produto": "Whey Protein Chocolate", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 148.66, "Valor Grama": 14.866},
    {"Cód.": "312", "Produto": "Whey Protein Cookie / Cream", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 143.0, "Valor Grama": 14.3},
    {"Cód.": "287", "Produto": "Whey Protein Morango", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 143.0, "Valor Grama": 14.3},
    {"Cód.": "235", "Produto": "Whey Protein WPC 80%", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 222.3, "Valor Grama": 22.23},
    {"Cód.": "169", "Produto": "Whey Protein+BCA", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 143.0, "Valor Grama": 14.3},
    {"Cód.": "114", "Produto": "Agar Agar", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 86.0, "Valor Grama": 8.6},
    {"Cód.": "306", "Produto": "Feno Grego Pó", "Classe Alimento": "SUPLEMENTO", "Valor Kilo": 40.0, "Valor Grama": 4.0},
    {"Cód.": "2", "Produto": "Açafrão (Cúrcuma)", "Classe Alimento": "TEMPERO", "Valor Kilo": 30.0, "Valor Grama": 3.0},
    {"Cód.": "286", "Produto": "Alho em Pó", "Classe Alimento": "TEMPERO", "Valor Kilo": 26.18, "Valor Grama": 2.618},
    {"Cód.": "10", "Produto": "Alho Flocos Desidratado", "Classe Alimento": "TEMPERO", "Valor Kilo": 44.0, "Valor Grama": 4.4},
    {"Cód.": "11", "Produto": "Alho Flocos Frito", "Classe Alimento": "TEMPERO", "Valor Kilo": 62.33, "Valor Grama": 6.233},
    {"Cód.": "12", "Produto": "Alho Granulado Desidratado", "Classe Alimento": "TEMPERO", "Valor Kilo": 33.66, "Valor Grama": 3.366},
    {"Cód.": "13", "Produto": "Alho Granulado Frito", "Classe Alimento": "TEMPERO", "Valor Kilo": 54.0, "Valor Grama": 5.4},
    {"Cód.": "15", "Produto": "Alho Poro Desidratado", "Classe Alimento": "TEMPERO", "Valor Kilo": 99.11, "Valor Grama": 9.911},
    {"Cód.": "16", "Produto": "Amaciante de Carne", "Classe Alimento": "TEMPERO", "Valor Kilo": 13.09, "Valor Grama": 1.309},
    {"Cód.": "32", "Produto": "Ana Maria", "Classe Alimento": "TEMPERO", "Valor Kilo": 41.33, "Valor Grama": 4.133},
    {"Cód.": "57", "Produto": "Caldo de Bacon", "Classe Alimento": "TEMPERO", "Valor Kilo": 20.0, "Valor Grama": 2.0},
    {"Cód.": "58", "Produto": "Caldo de Carne", "Classe Alimento": "TEMPERO", "Valor Kilo": 20.0, "Valor Grama": 2.0},
    {"Cód.": "59", "Produto": "Caldo de Galinha", "Classe Alimento": "TEMPERO", "Valor Kilo": 20.0, "Valor Grama": 2.0},
    {"Cód.": "261", "Produto": "Caldo de Peixe", "Classe Alimento": "TEMPERO", "Valor Kilo": 20.0, "Valor Grama": 2.0},
    {"Cód.": "205", "Produto": "Caldo de Legumes", "Classe Alimento": "TEMPERO", "Valor Kilo": 20.0, "Valor Grama": 2.0},
    {"Cód.": "77", "Produto": "Cebola em Po", "Classe Alimento": "TEMPERO", "Valor Kilo": 43.0, "Valor Grama": 4.3},
    {"Cód.": "78", "Produto": "Cebola Granulada Desidratada", "Classe Alimento": "TEMPERO", "Valor Kilo": 36.77, "Valor Grama": 3.677},
    {"Cód.": "81", "Produto": "Cenoura em Flocos", "Classe Alimento": "TEMPERO", "Valor Kilo": 33.0, "Valor Grama": 3.3},
    {"Cód.": "157", "Produto": "Cheiro Verde", "Classe Alimento": "TEMPERO", "Valor Kilo": 50.49, "Valor Grama": 5.049},
    {"Cód.": "86", "Produto": "Chimichurri com Pimenta", "Classe Alimento": "TEMPERO", "Valor Kilo": 53.3, "Valor Grama": 5.33},
    {"Cód.": "87", "Produto": "Chimichurri sem Pimenta", "Classe Alimento": "TEMPERO", "Valor Kilo": 64.0, "Valor Grama": 6.4},
    {"Cód.": "26", "Produto": "Chimichurry s/ pim. Def.", "Classe Alimento": "TEMPERO", "Valor Kilo": 64.0, "Valor Grama": 6.4},
    {"Cód.": "93", "Produto": "Coentro em Grão", "Classe Alimento": "TEMPERO", "Valor Kilo": 23.4, "Valor Grama": 2.34},
    {"Cód.": "54", "Produto": "Coentro em Pó", "Classe Alimento": "TEMPERO", "Valor Kilo": 19.19, "Valor Grama": 1.919},
    {"Cód.": "96", "Produto": "Colorau Paraiba Extra Forte", "Classe Alimento": "TEMPERO", "Valor Kilo": 29.33, "Valor Grama": 2.933},
    {"Cód.": "318", "Produto": "Colorífico do Norte", "Classe Alimento": "TEMPERO", "Valor Kilo": 15.12, "Valor Grama": 1.512},
    {"Cód.": "342", "Produto": "Cominho", "Classe Alimento": "TEMPERO", "Valor Kilo": 19.8, "Valor Grama": 1.98},
    {"Cód.": "100", "Produto": "Creme de Cebola", "Classe Alimento": "TEMPERO", "Valor Kilo": 17.5, "Valor Grama": 1.75},
    {"Cód.": "231", "Produto": "Curry", "Classe Alimento": "TEMPERO", "Valor Kilo": 25.0, "Valor Grama": 2.5},
    {"Cód.": "109", "Produto": "Ervas Finas", "Classe Alimento": "TEMPERO", "Valor Kilo": 44.0, "Valor Grama": 4.4},
    {"Cód.": "333", "Produto": "Feno Grego", "Classe Alimento": "TEMPERO", "Valor Kilo": 24.0, "Valor Grama": 2.4},
    {"Cód.": "137", "Produto": "Fumaça em Po", "Classe Alimento": "TEMPERO", "Valor Kilo": 36.66, "Valor Grama": 3.666},
    {"Cód.": "323", "Produto": "Louro Moido", "Classe Alimento": "TEMPERO", "Valor Kilo": 57.6, "Valor Grama": 5.76},
    {"Cód.": "320", "Produto": "Manjerição", "Classe Alimento": "TEMPERO", "Valor Kilo": 24.31, "Valor Grama": 2.431},
    {"Cód.": "293", "Produto": "Mostarda em Grão", "Classe Alimento": "TEMPERO", "Valor Kilo": 40.52, "Valor Grama": 4.052},
    {"Cód.": "177", "Produto": "Oregano", "Classe Alimento": "TEMPERO", "Valor Kilo": 50.0, "Valor Grama": 5.0},
    {"Cód.": "166", "Produto": "Paprica Defumada", "Classe Alimento": "TEMPERO", "Valor Kilo": 30.0, "Valor Grama": 3.0},
    {"Cód.": "178", "Produto": "Paprica Doce", "Classe Alimento": "TEMPERO", "Valor Kilo": 30.0, "Valor Grama": 3.0},
    {"Cód.": "179", "Produto": "Paprica Picante", "Classe Alimento": "TEMPERO", "Valor Kilo": 30.0, "Valor Grama": 3.0},
    {"Cód.": "175", "Produto": "Pimenta Branca Grãos", "Classe Alimento": "TEMPERO", "Valor Kilo": 87.23, "Valor Grama": 8.723},
    {"Cód.": "302", "Produto": "Pimenta Caiena", "Classe Alimento": "TEMPERO", "Valor Kilo": 45.1, "Valor Grama": 4.51},
    {"Cód.": "183", "Produto": "Pimenta Calabresa Flocos", "Classe Alimento": "TEMPERO", "Valor Kilo": 37.8, "Valor Grama": 3.78},
    {"Cód.": "184", "Produto": "Pimenta Chilli Mexicana", "Classe Alimento": "TEMPERO", "Valor Kilo": 25.55, "Valor Grama": 2.555},
    {"Cód.": "234", "Produto": "Pimenta do Reino Moida Branca", "Classe Alimento": "TEMPERO", "Valor Kilo": 58.16, "Valor Grama": 5.816},
    {"Cód.": "186", "Produto": "Pimenta do Reino Preta Grao", "Classe Alimento": "TEMPERO", "Valor Kilo": 67.09, "Valor Grama": 6.709},
    {"Cód.": "185", "Produto": "Pimenta do Reino Preta moida", "Classe Alimento": "TEMPERO", "Valor Kilo": 25.55, "Valor Grama": 2.555},
    {"Cód.": "303", "Produto": "Pimenta Jamaica", "Classe Alimento": "TEMPERO", "Valor Kilo": 71.72, "Valor Grama": 7.172},
    {"Cód.": "187", "Produto": "Pimenta Rosa Graos", "Classe Alimento": "TEMPERO", "Valor Kilo": 106.92, "Valor Grama": 10.692},
    {"Cód.": "188", "Produto": "Pimentao Verde Flocos", "Classe Alimento": "TEMPERO", "Valor Kilo": 75.74, "Valor Grama": 7.574},
    {"Cód.": "189", "Produto": "Pimentao Vermelho Flocos", "Classe Alimento": "TEMPERO", "Valor Kilo": 88.82, "Valor Grama": 8.882},
    {"Cód.": "218", "Produto": "Salsa Desidratada", "Classe Alimento": "TEMPERO", "Valor Kilo": 52.0, "Valor Grama": 5.2},
    {"Cód.": "283", "Produto": "Tempera Tudo", "Classe Alimento": "TEMPERO", "Valor Kilo": 56.1, "Valor Grama": 5.61},
    {"Cód.": "223", "Produto": "Tempero Baiano c/pimenta", "Classe Alimento": "TEMPERO", "Valor Kilo": 21.35, "Valor Grama": 2.135},
    {"Cód.": "329", "Produto": "Tempero Baiano s/pimenta", "Classe Alimento": "TEMPERO", "Valor Kilo": 57.6, "Valor Grama": 5.76},
    {"Cód.": "282", "Produto": "Tempero do Chefe", "Classe Alimento": "TEMPERO", "Valor Kilo": 56.1, "Valor Grama": 5.61},
    {"Cód.": "347", "Produto": "Tempero Dry Rub", "Classe Alimento": "TEMPERO", "Valor Kilo": 44.0, "Valor Grama": 4.4},
    {"Cód.": "106", "Produto": "Tempero Edu Guedes", "Classe Alimento": "TEMPERO", "Valor Kilo": 49.33, "Valor Grama": 4.933},
    {"Cód.": "225", "Produto": "Tempero Gaúcho Amanteigado", "Classe Alimento": "TEMPERO", "Valor Kilo": 39.0, "Valor Grama": 3.9},
    {"Cód.": "268", "Produto": "Tempero Gourmet", "Classe Alimento": "TEMPERO", "Valor Kilo": 65.0, "Valor Grama": 6.5},
    {"Cód.": "107", "Produto": "Tempero Lemon Pepper", "Classe Alimento": "TEMPERO", "Valor Kilo": 41.0, "Valor Grama": 4.1},
    {"Cód.": "226", "Produto": "Tempero Limão com Ervas Finas", "Classe Alimento": "TEMPERO", "Valor Kilo": 44.28, "Valor Grama": 4.428},
    {"Cód.": "102", "Produto": "Tempero Mineiro", "Classe Alimento": "TEMPERO", "Valor Kilo": 44.0, "Valor Grama": 4.4},
    {"Cód.": "172", "Produto": "Tempero Molho Tártaro", "Classe Alimento": "TEMPERO", "Valor Kilo": 56.99, "Valor Grama": 5.699},
    {"Cód.": "305", "Produto": "Tempero para Feijão", "Classe Alimento": "TEMPERO", "Valor Kilo": 47.11, "Valor Grama": 4.711},
    {"Cód.": "258", "Produto": "Tempero Paranaense", "Classe Alimento": "TEMPERO", "Valor Kilo": 46.0, "Valor Grama": 4.6},
    {"Cód.": "361", "Produto": "Tempero Pega Esposa", "Classe Alimento": "TEMPERO", "Valor Kilo": 59.4, "Valor Grama": 5.94},
    {"Cód.": "346", "Produto": "Tempero Pega Marido", "Classe Alimento": "TEMPERO", "Valor Kilo": 60.0, "Valor Grama": 6.0},
    {"Cód.": "349", "Produto": "Tempero salsa/cebola/alho", "Classe Alimento": "TEMPERO", "Valor Kilo": 51.0, "Valor Grama": 5.1},
    {"Cód.": "167", "Produto": "Tempero Vinagrete", "Classe Alimento": "TEMPERO", "Valor Kilo": 56.7, "Valor Grama": 5.67},
    {"Cód.": "227", "Produto": "Tomate Flocos", "Classe Alimento": "TEMPERO", "Valor Kilo": 70.15, "Valor Grama": 7.015},
    {"Cód.": "14", "Produto": "Tomilho", "Classe Alimento": "TEMPERO", "Valor Kilo": 30.0, "Valor Grama": 3.0},
    {"Cód.": "236", "Produto": "Zahtar", "Classe Alimento": "TEMPERO", "Valor Kilo": 25.0, "Valor Grama": 2.5},
    {"Cód.": "365", "Produto": "Argila Verde", "Classe Alimento": "TERAPEUTICO", "Valor Kilo": 6.5, "Valor Grama": 0.65},
    {"Cód.": "247", "Produto": "Carvão Ativado Vegetal", "Classe Alimento": "TERAPEUTICO", "Valor Kilo": 39.95, "Valor Grama": 3.99},
    {"Cód.": "344", "Produto": "Dolomita", "Classe Alimento": "TERAPEUTICO", "Valor Kilo": 14.0, "Valor Grama": 1.4}
];

// =============================
// DICIONÁRIOS DE CATEGORIAS
// =============================

// objeto que mapeia cada categoria para um emoji, deixando a interface mais visual
const CAT_ICONS = {
    'AÇÚCAR':       '🍬',
    'AROMATICOS':   '🌿',
    'CEREAL':       '🌾',
    'CONSERVA':     '🫙',
    'DOCE':         '🍫',
    'FARINHA':      '🌽',
    'FRUTA':        '🍎',
    'GRAO':         '🫘',
    'MACARRAO':     '🍝',
    'OLEOGINOSAS':  '🥜',
    'OUTROS':       '📦',
    'QUEIJO':       '🧀',
    'SAL':          '🧂',
    'SEMENTES':     '🌻',
    'SNACKS':       '🥨',
    'SUPLEMENTO':   '💊',
    'TEMPERO':      '🌶️',
    'TERAPEUTICO':  '🌱'
};

// objeto que mapeia o nome interno da categoria para o nome legível exibido na tela
const CAT_LABELS = {
    'AÇÚCAR':       'Açúcar',
    'AROMATICOS':   'Aromáticos',
    'CEREAL':       'Cereais',
    'CONSERVA':     'Conservas',
    'DOCE':         'Doces',
    'FARINHA':      'Farinhas',
    'FRUTA':        'Frutas',
    'GRAO':         'Grãos',
    'MACARRAO':     'Macarrão',
    'OLEOGINOSAS':  'Oleaginosas',
    'OUTROS':       'Outros',
    'QUEIJO':       'Queijos',
    'SAL':          'Sais',
    'SEMENTES':     'Sementes',
    'SNACKS':       'Snacks',
    'SUPLEMENTO':   'Suplementos',
    'TEMPERO':      'Temperos',
    'TERAPEUTICO':  'Terapêutico'
};

// =============================
// VARIÁVEIS DE ESTADO
// =============================

// guarda qual categoria está selecionada no momento. começa com 'TODOS' (nenhum filtro)
let activeCategory = 'TODOS';
// guarda o texto que o usuário digitou na busca. começa vazio
let searchQuery = '';
// guarda qual ordenação está ativa no momento. começa ordenando por nome A-Z
let sortMode = 'name';
//let é diferente de const — declara uma variável que pode ser alterada depois. Essas três variáveis guardam o estado atual da interface 

// =============================
// CONTAGEM POR CATEGORIA
// =============================

// objeto que vai guardar quantos produtos existem em cada categoria
// começa vazio e é preenchido automaticamente percorrendo o array PRODUCTS
const catCounts = {};

// forEach percorre cada produto do array um por um
// para cada produto, verifica se a categoria já existe no objeto catCounts
// se não existe, cria com valor 0. depois soma 1

PRODUCTS.forEach(function(produto) {
    const cat = produto['Classe Alimento'];
    if (catCounts[cat] === undefined) {
        catCounts[cat] = 0;
    }                                   
    catCounts[cat] = catCounts[cat] + 1;
});

// =============================
// FUNÇÃO: FORMATAR PREÇO
// =============================

// recebe um número e retorna uma string formatada como preço brasileiro
// exemplo: 4.924 vira "R$ 4,92"
function fmt(valor) { // declara uma função chamada fmt que recebe um parâmetro chamado valor.
    return 'R$ ' + valor.toFixed(2).replace('.', ','); // valor.toFixed(2) método que arredonda o número para 2 casas decimais e retorna uma string. 4.924 vira "4.92"
}

// =============================
// FUNÇÃO: CONSTRUIR SIDEBAR
// =============================

// essa função gera os botões de categoria na barra lateral
// ela é chamada toda vez que o usuário seleciona uma categoria diferente
function buildSidebar() {

    const list = document.getElementById('catList'); // pega o elemento HTML com id 'catList' e guarda na variável list

    // cria um array com todas as categorias ordenadas alfabeticamente
    // Object.keys() retorna um array com todas as chaves do objeto catCounts
    // .sort() ordena esse array alfabeticamente
    const categorias = Object.keys(catCounts).sort();

    // variável que vai acumulando o código HTML dos botões como texto.
    let html = '';

    // monta o HTML do botão "Todos" que aparece primeiro na sidebar
    // esse botão mostra todos os produtos sem filtro de categoria
    html += '<button class="cat-btn ' + (activeCategory === 'TODOS' ? 'active' : '') + '" onclick="selectCat(\'TODOS\')">';
    // activeCategory === 'TODOS' ? 'active' : '' — isso é um operador ternário — é um if/else em uma linha.
    // onclick="selectCat(\'TODOS\')" — quando o botão for clicado, chama a função
    html += '<span class="cat-icon">🏪</span>';
    html += '<span class="cat-label">Todos</span>';
    html += '<span class="cat-count">' + PRODUCTS.length + '</span>';
    html += '</button>';

    // percorre cada categoria e monta o HTML do botão correspondente
    categorias.forEach(function(cat) {

        // verifica se o botão dessa categoria deve ter a classe active
        const isActive = activeCategory === cat ? 'active' : '';

        html += '<button class="cat-btn ' + isActive + '" onclick="selectCat(\'' + cat + '\')">';
        html += '<span class="cat-icon">' + (CAT_ICONS[cat] || '📦') + '</span>';
        // CAT_ICONS[cat] || '📦' — o || é o operador ou. Se CAT_ICONS[cat] existir, usa ele. Se não, usa '📦' como padrão.
        html += '<span class="cat-label">' + (CAT_LABELS[cat] || cat) + '</span>';
        html += '<span class="cat-count">' + catCounts[cat] + '</span>';
        html += '</button>';
    });

    // insere todo o HTML gerado dentro da div#catList no HTML
    // innerHTML substitui todo o conteúdo interno do elemento pelo novo HTML
    list.innerHTML = html; // é uma propriedade que lê ou define o conteúdo HTML interno de um elemento.

    // atualiza os números no hero (total de produtos e total de categorias)
    document.getElementById('totalProd').innerHTML = PRODUCTS.length;
    document.getElementById('totalCats').innerHTML = categorias.length;
}

// =============================
// FUNÇÃO: SELECIONAR CATEGORIA
// =============================

// chamada quando o usuário clica em um botão de categoria na sidebar
// recebe o nome da categoria clicada como parâmetro
function selectCat(cat) {

    // atualiza a variável de estado com a categoria escolhida
    activeCategory = cat;

    // reconstrói a sidebar para atualizar qual botão fica com a classe active
    buildSidebar();

    // re-renderiza os cards com o novo filtro de categoria aplicado
    render();
}

// =============================
// FUNÇÃO: FILTRAR E ORDENAR
// =============================

// retorna um array com os produtos filtrados e ordenados conforme o estado atual
// essa função não mexe na tela — só processa e retorna os dados
function getFiltered() {

    // começa com todos os produtos
    let arr = PRODUCTS;

    // se uma categoria específica está selecionada, filtra só os produtos dela
    if (activeCategory !== 'TODOS') {
        arr = arr.filter(function(p) {
            return p['Classe Alimento'] === activeCategory;
        });
    }

    // se o usuário digitou algo na busca, filtra os produtos pelo texto
    if (searchQuery !== '') {

        // converte a busca para minúsculo para comparar sem diferenciar maiúsculas
        const q = searchQuery.toLowerCase();

        arr = arr.filter(function(p) {
            // verifica se o nome do produto contém o texto buscado
            // também verifica o código do produto
            return p['Produto'].toLowerCase().includes(q) || p['Cód.'].includes(q);
        });
    }

    // cria uma cópia do array para não modificar o original
    // e ordena conforme o sortMode atual
    const sorted = arr.slice();

    sorted.sort(function(a, b) {
        if (sortMode === 'name') {
            // ordena por nome de A a Z usando localeCompare para respeitar acentos do português
            return a['Produto'].localeCompare(b['Produto'], 'pt-BR');
        }
        if (sortMode === 'name_desc') {
            // ordena por nome de Z a A — inverte a comparação
            return b['Produto'].localeCompare(a['Produto'], 'pt-BR');
        }
        if (sortMode === 'price_asc') {
            // ordena pelo menor preço por grama primeiro
            return a['Valor Grama'] - b['Valor Grama'];
        }
        if (sortMode === 'price_desc') {
            // ordena pelo maior preço por grama primeiro
            return b['Valor Grama'] - a['Valor Grama'];
        }
    });

    return sorted;
}

// =============================
// FUNÇÃO: GERAR HTML DO CARD
// =============================

// recebe um produto e retorna o HTML completo do card desse produto
// é uma função auxiliar chamada dentro do render
function cardHTML(p) {

    // verifica se o produto tem preço cadastrado
    // se Valor Grama for maior que 0, tem preço
    const hasPrice = p['Valor Grama'] > 0;

    // começa a montar o HTML do card
    let card = '';
    card += '<div class="card">';
    card += '<div class="card-code">Cód. ' + p['Cód.'] + '</div>';
    // p['Cód.'] acessa o valor da chave 'Cód.' do objeto produto atual
    card += '<div class="card-name">' + p['Produto'] + '</div>';

    // se tem preço, exibe os dois preços lado a lado com a linha divisória
    // se não tem preço, exibe o texto "Consulte o preço"
    if (hasPrice) {
        card += '<div class="card-prices">';
        card += '<div class="price-block">';
        card += '<span class="price-label">/ grama</span>';
        card += '<span class="price-val">' + fmt(p['Valor Grama']) + '</span>';
        // fmt() é a função que formata o número como preço brasileiro
        card += '</div>';
        card += '<div class="price-divider"></div>';
        card += '<div class="price-block">';
        card += '<span class="price-label">/ kilo</span>';
        card += '<span class="price-val secondary">' + fmt(p['Valor Kilo']) + '</span>';
        card += '</div>';
        card += '</div>';
    } else {
        card += '<div class="no-price">Consulte o preço</div>';
    }

    card += '</div>';
    return card;
}

// =============================
// FUNÇÃO: RENDERIZAR TELA
// =============================

// essa é a função principal — ela lê o estado atual e redesenha tudo na tela
// é chamada sempre que qualquer coisa muda (busca, filtro, ordenação)
function render() {

    // busca os produtos já filtrados e ordenados
    const filtered = getFiltered();

    // pega o elemento main onde os cards serão inseridos
    const main = document.getElementById('mainContent');

    // atualiza o contador de produtos visíveis na barra de controles
    document.getElementById('visibleCount').innerHTML = filtered.length;

    // se nenhum produto foi encontrado, exibe a mensagem de estado vazio
    if (filtered.length === 0) {
        main.innerHTML = '<div class="empty">';
        main.innerHTML += '<p>Nenhum produto encontrado.</p>';
        main.innerHTML += '</div>';
        return;
        // return encerra a função aqui — o código abaixo não executa se não há produtos
    }

    // se uma categoria está selecionada ou há busca ativa
    // exibe os produtos em uma única seção com o título da categoria ou da busca
    if (activeCategory !== 'TODOS' || searchQuery !== '') {

        // define o título da seção
        let label = '';
        if (activeCategory !== 'TODOS') {
            // usa o nome legível da categoria ou o nome interno se não tiver tradução
            label = CAT_LABELS[activeCategory] || activeCategory;
        } else {
            label = 'Busca: "' + searchQuery + '"';
        }

        let html = '';
        html += '<div class="section-header">';
        html += '<h2>' + label + '</h2>';
        html += '<span class="sec-count">' + filtered.length + ' produtos</span>';
        html += '</div>';
        html += '<div class="grid">';

        // percorre cada produto filtrado e adiciona o HTML do card
        filtered.forEach(function(p) {
            html += cardHTML(p);
        });

        html += '</div>';
        main.innerHTML = html;
        return;
    }

    // se está mostrando TODOS sem busca, agrupa os produtos por categoria
    // e exibe uma seção separada para cada categoria
    const byCat = {};
    // percorre todos os produtos filtrados e os agrupa em um objeto por categoria
    filtered.forEach(function(p) {
        const cat = p['Classe Alimento'];
        if (byCat[cat] === undefined) {
            byCat[cat] = [];
            // se a categoria ainda não existe no objeto, cria um array vazio
        }
        byCat[cat].push(p);
        // push adiciona o produto ao array da categoria correspondente
    });

    // monta o HTML de todas as categorias em ordem alfabética
    let html = '';
    const cats = Object.keys(byCat).sort();

    cats.forEach(function(cat) {
        const items = byCat[cat];

        html += '<div class="section-header">';
        html += '<h2>' + (CAT_ICONS[cat] || '📦') + ' ' + (CAT_LABELS[cat] || cat) + '</h2>';
        html += '<span class="sec-count">' + items.length + ' produtos</span>';
        html += '</div>';
        html += '<div class="grid">';

        items.forEach(function(p) {
            html += cardHTML(p);
        });

        html += '</div>';
    });

    main.innerHTML = html;
}

// =============================
// EVENTOS DE INTERAÇÃO
// =============================

// escuta o evento de digitação no campo de busca
// toda vez que o usuário digita algo, atualiza o searchQuery e re-renderiza
document.getElementById('searchInput').addEventListener('input', function(e) {
    searchQuery = e.target.value.trim();
    // e.target é o elemento que disparou o evento — o input de busca
    // .value é o texto atual dentro do input
    // .trim() remove espaços em branco do início e do fim
    render();
});

// escuta o evento de mudança no dropdown de ordenação
// toda vez que o usuário escolhe uma opção, atualiza o sortMode e re-renderiza
document.getElementById('sortSelect').addEventListener('change', function(e) {
    sortMode = e.target.value;
    // e.target.value retorna o value da option selecionada, por exemplo 'price_asc'
    render();
});

// =============================
// INICIALIZAÇÃO
// =============================

// essas duas linhas são chamadas uma única vez quando a página carrega
// elas constroem a sidebar e renderizam os cards pela primeira vez
buildSidebar();
render();