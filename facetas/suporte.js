function suporte(){
	document.getElementById('contentSuporte').innerHTML = "";
	var xml,text, parser,xmlDoc, blocos,x,y;
	//Declarar as variaveis contadoras de cada bloco
	var cont_repeat_ext=0;
	var cont_whileUntil_ext=0;
	var cont_for_ext=0;
	var cont_each_ext=0;
	var cont_flow_ext=0;
	var cont_if_ext=0;
	var cont_compare_ext=0;
	var cont_op_ext=0;
	var cont_neg_ext=0;
	var cont_boolean_ext=0;
	var cont_null_ext=0;
	var cont_ternary_ext=0;
	var cont_number_ext=0;
	var cont_arit_ext=0;
	var cont_single_ext=0;
	var cont_trig_ext=0;
	var cont_const_ext=0;
	var cont_property_ext=0;
	var cont_round_ext=0;
	var cont_on_list_ext=0;
	var cont_modulo_ext=0;
	var cont_constrain_ext=0;
	var cont_random_int_ext=0;
	var cont_random_float_ext=0;
	var cont_text_ext=0;
	var cont_text_join_ext=0;
	var cont_text_append_ext=0;
	var cont_text_length_ext=0;
	var cont_text_isEmpty_ext=0;
	var cont_text_indexOf_ext=0;
	var cont_text_charAt_ext=0;
	var cont_text_getSubstring_ext=0;
	var cont_text_changeCase_ext=0;
	var cont_text_trim_ext=0;
	var cont_text_print_ext=0;
	var cont_text_prompt_ext_xt=0;
	var cont_lists_create_with_ext=0;
	var cont_lists_repeat_ext=0;
	var cont_lists_length_ext=0;
	var cont_lists_isEmpty_ext=0;
	var cont_lists_indexOf_ext=0;
	var cont_lists_getIndex_ext=0;
	var cont_lists_setIndex_ext=0;
	var cont_lists_getSublist_ext=0;
	var cont_lists_split_ext=0;
	var cont_lists_sort_ext=0;
	var cont_variables_set_ext=0;
	var cont_variables_get_ext=0;
	var contM_while=0;
	var contM_until=0;
	var contM_break=0;
	var contM_continue=0;
	
	xml = Blockly.Xml.workspaceToDom(workspace);
	text = Blockly.Xml.domToPrettyText(xml);	
	parser = new DOMParser();
	xmlDoc = parser.parseFromString(text,"text/xml");
	blocos = xmlDoc.getElementsByTagName("block");
	
	for (i=0;i<blocos.length; i++){
		atributos = xmlDoc.getElementsByTagName("block")[i].attributes;
		tipo= atributos.getNamedItem("type").nodeValue;
			switch (tipo) {
			//*****Blocos de Repetição*****
			case 'controls_whileUntil': //a
			cont_whileUntil_ext++;
			while (cont_whileUntil_ext==1){
			var controls_whileUntil_ext= document.getElementById('contentSuporte');
			controls_whileUntil_ext.insertAdjacentHTML('beforeend',"<span id='enquanto_ate'></span><ul class='list-group'><li class='list-group-item'> <span class='label label-success'>enquanto/até</span> Você utilizou este tipo de bloco <strong><span id='contWhile'></span></strong> <span id='label_enquanto' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li><li class='list-group-item'> <span class='glyphicon glyphicon-share-alt'></span> executa suas instruções, desde que uma condição especificada seja avaliada como verdadeira. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Lacos_e_iteracoes#while_statement' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_whileUntil_ext++;	
			}
			document.getElementById('contWhile').innerHTML =cont_whileUntil_ext-1 ;
			break;
			
			case 'controls_repeat_ext'://b
			cont_repeat_ext++;
			while (cont_repeat_ext==1){
			var controls_repeat_ext= document.getElementById('contentSuporte');
			controls_repeat_ext.insertAdjacentHTML('beforeend', "<span id='repeticao'></span><ul class='list-group'><li class='list-group-item'><span class='label label-success'>Repetição</span> Você utilizou este tipo de bloco <strong><span id='contFor'></span></strong> <span id='label_repeticao' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Repete instruções até que a condição especificada seja falsa.  <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Lacos_e_iteracoes#for_statement' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_repeat_ext++;
				
			}
			document.getElementById('contFor').innerHTML =cont_repeat_ext-1 ;
			
			break;
			
			case 'controls_for': //c
			cont_for_ext++;
			while (cont_for_ext==1){
			var controls_for_ext= document.getElementById('contentSuporte');
			controls_for_ext.insertAdjacentHTML('beforeend', "<span id='repeticao_cont'></span><ul class='list-group'><li class='list-group-item'> <span class='label label-success' >Repetição com controle</span> Você utilizou este tipo de bloco <strong><span id='contefor'></span></strong> <span id='label_repeticao_cont' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es)</span>.</li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Cria um laço que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.  <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for' target='_blank'> MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_for_ext++;
			}
			document.getElementById('contefor').innerHTML = cont_for_ext-1;
			
			break;
			
			case 'controls_forEach'://d
			cont_each_ext++;
			while (cont_each_ext==1){
			var controls_forEach_ext= document.getElementById('contentSuporte');
			controls_forEach_ext.insertAdjacentHTML('beforeend', "<span id='repeticao_lista'></span><ul class='list-group'><li class='list-group-item'><span class='label label-success'>Repetição na lista</span> Você utilizou este tipo de bloco <strong><span id='contEach'></span></strong> <span id='label_repeticao_lista' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es)</span>.</li><li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Executa iterações a patir de uma variável específica, percorrendo todas suas propriedades.  <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Lacos_e_iteracoes#for...in_statement' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_each_ext++;	
			}
			document.getElementById('contEach').innerHTML = cont_each_ext-1;
			
			break;
			
			case 'controls_flow_statements': //e
			cont_flow_ext++;
			while (cont_flow_ext==1){
			var controls_flow_statements_ext= document.getElementById('contentSuporte');
			controls_flow_statements_ext.insertAdjacentHTML('beforeend', "<span id='break'></span><ul class='list-group'><li class='list-group-item'><span class='label label-success'>controle de fluxo</span> Você utilizou este tipo de bloco <strong><span id='contFlow'></span></strong> <span id='label_break' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es)</span>.</li><li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Termina ou reinicia um laço.  <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Lacos_e_iteracoes#break_statement' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_flow_ext++;	
			}
			document.getElementById('contFlow').innerHTML = cont_flow_ext-1;

			break;
			
			//*****Blocos de Lógica*****

			case 'controls_if'://OK
			cont_if_ext++;
			while (cont_if_ext==1){
			var controls_if_ext= document.getElementById('contentSuporte');
			controls_if_ext.insertAdjacentHTML('beforeend', "<span id='se_verdadeiro'></span><ul class='list-group'><li class='list-group-item'><span class='label label-primary'>Se verdadeiro</span> Você utilizou este tipo de bloco <strong><span id='contif'></span></strong> <span id='label_se_verdadeiro' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es)</span>.</li><li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Uma declaração condicional é um conjunto de comandos que são executados caso uma condição especificada seja verdadeira.  <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Declara%C3%A7%C3%B5es#if...else_statement' target='_blank'> MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_if_ext++;	
			}
			
			document.getElementById('contif').innerHTML = cont_if_ext-1;
			
			
			break;
			
			case 'logic_compare'://ok
			cont_compare_ext++;
			while (cont_compare_ext==1){
			var logic_compare_ext= document.getElementById('contentSuporte');
			logic_compare_ext.insertAdjacentHTML('beforeend', "<span id='comparacao'></span><ul class='list-group'><li class='list-group-item'><span class='label label-primary' >Comparação lógica</span> Você utilizou este tipo de bloco <strong><span id='contcompare'></span></strong> <span id='label_comparacao' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Um operador de comparação compara seus operandos e retorna um valor lógico baseado em se a comparação é verdadeira.  <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operadores_de_comparação' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_compare_ext++;	
			}
			document.getElementById('contcompare').innerHTML = cont_compare_ext-1;
			break;
			
			case 'logic_operation': //ok
			cont_op_ext++;
			while (cont_op_ext==1){
			var logic_operation_ext= document.getElementById('contentSuporte');
			logic_operation_ext.insertAdjacentHTML('beforeend', "<span id='operacao_logica'></span><ul class='list-group'><li class='list-group-item'><span class='label label-primary'>Operação lógica</span> Você utilizou este tipo de bloco <strong><span id='contop'></span></strong> <span id='label_operacao_logica' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'> <span class='glyphicon glyphicon-share-alt'></span> Operadores lógicos são utilizados tipicamente com valores booleanos (lógicos); neste caso, retornam um valor booleano.  <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operadores_lógicos'target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_op_ext++;	
			}
			document.getElementById('contop').innerHTML = cont_op_ext-1;
			break;
			
			case 'logic_negate'://ok
			cont_neg_ext++;
			while (cont_neg_ext==1){
			var logic_negate_ext= document.getElementById('contentSuporte');
			logic_negate_ext.insertAdjacentHTML('beforeend', "<span id='negacao_logica'></span><ul class='list-group'><li class='list-group-item'><span class='label label-primary' >Negação lógica</span> Você utilizou este tipo de bloco <strong><span id='contneg'></span></strong> <span id='label_negacao_logica' data-toggle='tooltip' data-placement='right' title='Hi!' >vez(es).</span></li> <li class='list-group-item'> <span class='glyphicon glyphicon-share-alt'></span> (Negação lógica) Retorna falso caso o único operando possa ser convertido para verdadeiro; senão, retorna verdadeiro.  <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operadores_lógicos' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_neg_ext++;	
			}
			document.getElementById('contneg').innerHTML = cont_neg_ext-1;
			break;
			
			case 'logic_boolean'://OK
			cont_boolean_ext++;
			while (cont_boolean_ext==1){
			var logic_boolean_ext= document.getElementById('contentSuporte');
			logic_boolean_ext.insertAdjacentHTML('beforeend', "<span id='logica_boolean'></span><ul class='list-group'><li class='list-group-item'><span class='label label-primary'  >Lógica booleana</span> Você utilizou este tipo de bloco <strong><span id='contboolean'></span></strong> <span id='label_logica_boolean' data-toggle='tooltip' data-placement='right' title='Hi'>vez(es).</span></li> <li class='list-group-item'> <span class='glyphicon glyphicon-share-alt'></span> Um valor booleano.  <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Boolean' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_boolean_ext++;	
			}
			document.getElementById('contboolean').innerHTML = cont_boolean_ext-1;
			break;
			
			case 'logic_null': //ok
			cont_null_ext++;
			while (cont_null_ext==1){
			var logic_null_ext= document.getElementById('contentSuporte');
			logic_null_ext.insertAdjacentHTML('beforeend', "<span id='logica_nulo'></span><ul class='list-group'><li class='list-group-item'><span class='label label-primary'  >Lógica nulo</span> Você utilizou este tipo de bloco <strong><span id='contnull'></span></strong> <span id='label_logica_nulo' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'> <span class='glyphicon glyphicon-share-alt'></span> O valor null é um literal em JavaScript que representa um valor nulo ou 'vazio'. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/null' target='_blank'>MDN</a></li> </ul>" );
			cont_null_ext++;	
			}
			document.getElementById('contnull').innerHTML = cont_null_ext-1;
			break;
				
			case 'logic_ternary'://ok
			cont_ternary_ext++;
			while (cont_ternary_ext==1){
			var logic_ternary_ext= document.getElementById('contentSuporte');
			logic_ternary_ext.insertAdjacentHTML('beforeend', "<span id='logica_ternaria'></span><ul class='list-group'><li class='list-group-item'><span class='label label-primary' >Comparação lógica ternária</span> Você utilizou este tipo de bloco <strong><span id='contternary'></span></strong> <span id='label_logica_ternaria' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Utiliza três operandos. O operador pode ter um de dois valores baseados em uma condição. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operador_condicional_(ternário)' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_ternary_ext++;	
			}
			document.getElementById('contternary').innerHTML = cont_ternary_ext-1;
			break;

			//*****Blocos de Matemática*****
			
			case 'math_number'://ok
			cont_number_ext++;
			while (cont_number_ext==1){
			var math_number_ext= document.getElementById('contentSuporte');
			math_number_ext.insertAdjacentHTML('beforeend', "<span id='numero'></span><ul class='list-group'><li class='list-group-item'><span class='label label-warning' >Um número</span> Você utilizou este tipo de bloco <strong><span id='contnumber'></span></strong> <span id='label_numero' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Números. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Numeros_e_datas#Números' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_number_ext++;	
			}
			document.getElementById('contnumber').innerHTML = cont_number_ext-1;
			break;
			
			case 'math_arithmetic': //ok
			cont_arit_ext++;
			while (cont_arit_ext==1){
			var math_arithmetic_ext= document.getElementById('contentSuporte');
			math_arithmetic_ext.insertAdjacentHTML('beforeend', "<span id='aritmetica'></span><ul class='list-group'><li class='list-group-item'><span class='label label-warning' >Aritmética</span> Você utilizou este tipo de bloco <strong><span id='contarit'></span></strong> <span id='label_aritmetica' data-toggle='tooltip' data-placement='right' title='Hi!' >vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Operadores aritméticos tomam valores numéricos (sejam literais ou variáveis) como seus operandos e retornam um único valor númerico. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operadores_aritméticos' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_arit_ext++;	
			}
			document.getElementById('contarit').innerHTML = cont_arit_ext-1;
			break;
				
			case 'math_single'://ok
			cont_single_ext++;
			while (cont_single_ext==1){
			var math_single_ext= document.getElementById('contentSuporte');
			math_single_ext.insertAdjacentHTML('beforeend', "<span id='single'></span><ul class='list-group'><li class='list-group-item'><span class='label label-warning' >Funções com um número</span> Você utilizou este tipo de bloco <strong><span id='contsingle'></span></strong> <span id='label_single' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> O objeto Math tem propriedades e métodos para constantes matemáticas e funções. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math'target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_single_ext++;	
			}
			document.getElementById('contsingle').innerHTML = cont_single_ext-1;
			break;

			case 'math_trig'://ok
			cont_trig_ext++;
			while (cont_trig_ext==1){
			var math_trig_ext= document.getElementById('contentSuporte');
			math_trig_ext.insertAdjacentHTML('beforeend', "<span id='trigonometria'></span><ul class='list-group'><li class='list-group-item'><span class='label label-warning' >Trigonometria</span> Você utilizou este tipo de bloco <strong><span id='conttrig'></span></strong> <span id='label_trigonometria' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> O objeto Math tem propriedades e métodos para constantes matemáticas e funções. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#Methods' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_trig_ext++;	
			}
			document.getElementById('conttrig').innerHTML = cont_trig_ext-1;
			break;
			
			case 'math_constant': //ok
			cont_const_ext++;
			while (cont_const_ext==1){
			var math_constant_ext= document.getElementById('contentSuporte');
			math_constant_ext.insertAdjacentHTML('beforeend', "<span id='constante'></span><ul class='list-group'><li class='list-group-item'><span class='label label-warning' >Constante matemática</span> Você utilizou este tipo de bloco <strong><span id='contconst'></span></strong> <span id='label_constante' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> O objeto Math tem propriedades e métodos para constantes matemáticas e funções. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#Methods' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_const_ext++;	
			}
			document.getElementById('contconst').innerHTML = cont_const_ext-1;
			break;
			
			case 'math_number_property': //ok
			cont_property_ext++;
			while (cont_property_ext==1){
			var math_number_property_ext= document.getElementById('contentSuporte');
			math_number_property_ext.insertAdjacentHTML('beforeend', "<span id='propriedade'></span><ul class='list-group'><li class='list-group-item'><span class='label label-warning'>Propriedade númerica</span> Você utilizou este tipo de bloco <strong><span id='contprop'></span></strong> <span id='label_propriedade' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li></ul>" );
			cont_property_ext++;	
			}
			document.getElementById('contprop').innerHTML = cont_property_ext-1;
			break;
			
			case 'math_round'://ok
			cont_round_ext++;
			while (cont_round_ext==1){
			var math_round_ext= document.getElementById('contentSuporte');
			math_round_ext.insertAdjacentHTML('beforeend', "<span id='arredondar'></span><ul class='list-group'><li class='list-group-item'><span class='label label-warning'>Arredondar um número</span> Você utilizou este tipo de bloco <strong><span id='contround'></span></strong> <span id='label_arredondar' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Retorna o valor arrendodado, de um número x (decimal), para o valor inteiro mais próximo. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round'target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_round_ext++;	
			}
			document.getElementById('contround').innerHTML = cont_round_ext-1;
			break;
			
			case 'math_on_list':
			cont_on_list_ext++;
			while (cont_on_list_ext==1){
			var math_on_list_ext= document.getElementById('contentSuporte');
			math_on_list_ext.insertAdjacentHTML('beforeend', "<span id='mat_lista'></span><ul class='list-group'><li class='list-group-item'><span class='label label-warning'>Matemática na lista</span> Você utilizou este tipo de bloco <strong><span id='contonlist'></span></strong> <span id='label_mat_lista' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Você pode atravessar a lista e realizar operações. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array#Sintaxe' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_on_list_ext++;	
			}
			document.getElementById('contonlist').innerHTML = cont_on_list_ext-1;
			break;
				
			case 'math_modulo'://ok
			cont_modulo_ext++;
			while (cont_modulo_ext==1){
			var math_modulo_ext= document.getElementById('contentSuporte');
			math_modulo_ext.insertAdjacentHTML('beforeend', "<span id='resto_divisao'></span><ul class='list-group'><li class='list-group-item'><span class='label label-warning'>Resto da divisão</span> Você utilizou este tipo de bloco <strong><span id='contmodulo'></span></strong> <span id='label_resto_divisao' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> A função módulo é o resto inteiro da divisão de var1 por var2. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Módulo_()' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_modulo_ext++;	
			}
			document.getElementById('contmodulo').innerHTML = cont_modulo_ext-1;
			break;	
			
			case 'math_constrain':
			cont_constrain_ext++;
			while (cont_constrain_ext==1){
			var math_constrain_ext= document.getElementById('contentSuporte');
			math_constrain_ext.insertAdjacentHTML('beforeend', "<span id='limite'></span><ul class='list-group'><li class='list-group-item'><span class='label label-warning'>Restringir limite</span> Você utilizou este tipo de bloco <strong><span id='contconstrain'></span></strong> <span id='label_limite' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> O objeto Math tem propriedades e métodos para constantes matemáticas e funções. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#Methods' target='_blank'>MDN</a></li> </ul>" );
			cont_constrain_ext++;	
			}
			document.getElementById('contconstrain').innerHTML = cont_constrain_ext-1;
			break;
			
			case 'math_random_int':
			cont_random_int_ext++;
			while (cont_random_int_ext==1){
			var math_random_int_ext= document.getElementById('contentSuporte');
			math_random_int_ext.insertAdjacentHTML('beforeend', "<span id='int_aleatorio'></span><ul class='list-group'><li class='list-group-item'><span class='label label-warning'>Inteiro aleatório</span> Você utilizou este tipo de bloco <strong><span id='contrandomint'></span></strong> <span id='label_int_aleatorio' data-toggle='tooltip' data-placement='right' title='Hi!' >vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Um número inteiro aleatório. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_random_int_ext++;	
			}
			document.getElementById('contrandomint').innerHTML = cont_random_int_ext-1;
			break;
			
			case 'math_random_float':
			cont_random_float_ext++;
			while (cont_random_float_ext==1){
			var math_random_float_ext= document.getElementById('contentSuporte');
			math_random_float_ext.insertAdjacentHTML('beforeend', "<span id='real_aleatorio'></span><ul class='list-group'><li class='list-group-item'><span class='label label-warning'>Real aleatório</span> Você utilizou este tipo de bloco <strong><span id='contrandomfloat'></span></strong> <span id='label_real_aleatorio' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Números pseudo-aleatórios em uma variação [0, 1) ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo). <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_random_float_ext++;	
			}
			document.getElementById('contrandomfloat').innerHTML = cont_random_float_ext-1;
			break;
			
			//*****Blocos de texto
			
			case 'text'://OK
			cont_text_ext++;
			while (cont_text_ext==1){
			var text_ext= document.getElementById('contentSuporte');
			text_ext.insertAdjacentHTML('beforeend', "<span id='texto'></span><ul class='list-group'><li class='list-group-item'><span class='label label-default'>Texto</span> Você utilizou este tipo de bloco <strong><span id='conttext'></span></strong> <span id='label_texto' data-toggle='tooltip' data-placement='right' title='Hi!'  >vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Usado para representar informações de texto. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Formatando_texto#Strings' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_text_ext++;	
			}
			document.getElementById('conttext').innerHTML = cont_text_ext-1;
			break;
			
			case 'text_join'://ok
			cont_text_join_ext++;
			while (cont_text_join_ext==1){
			var text_join_ext= document.getElementById('contentSuporte');
			text_join_ext.insertAdjacentHTML('beforeend', "<span id='juntartexto'></span><ul class='list-group'><li class='list-group-item'><span class='label label-default'>Juntar texto</span> Você utilizou este tipo de bloco <strong><span id='conttextjoin'></span></strong> <span id='label_juntartexto' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li><li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span>  Combina o texto de duas ou mais strings e retorna uma nova string. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_text_join_ext++;	
			}
			document.getElementById('conttextjoin').innerHTML = cont_text_join_ext-1;
			break;
			
			case 'text_append'://ok
			cont_text_append_ext++;
			while (cont_text_append_ext==1){
			var text_append_ext= document.getElementById('contentSuporte');
			text_append_ext.insertAdjacentHTML('beforeend', "<span id='acrescentar'></span><ul class='list-group'><li class='list-group-item'><li class='list-group-item'><span class='label label-default'>Acrescentrar texto</span> Você utilizou este tipo de bloco <strong><span id='contappend'></span></strong> <span id='label_acrescentartexto' data-toggle='tooltip' data-placement='right' title='Hi!' >vez(es)</span>.</li> <li class='list-group-item'> <span class='glyphicon glyphicon-share-alt'></span> Acrescenta um pedaço de string à uma variàvel. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Formatando_texto#Objetos_String' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_text_append_ext++;	
			}
			document.getElementById('contappend').innerHTML = cont_text_append_ext-1;
			break;
			
			case 'text_length'://ok
			cont_text_length_ext++;
			while (cont_text_length_ext==1){
			var text_length_ext= document.getElementById('contentSuporte');
			text_length_ext.insertAdjacentHTML('beforeend', "<span id='tamanhotexto'></span><ul class='list-group'><li class='list-group-item'><span class='label label-default'>Tamanho do texto</span> Você utilizou este tipo de bloco <strong><span id='contlength'></span></strong> <span id='label_tamanhotexto' data-toggle='tooltip' data-placement='right' title='Hi!' >vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Representa o comprimento de uma string. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_text_length_ext++;	
			}
			document.getElementById('contlength').innerHTML = cont_text_length_ext-1;
			break;
			
			case 'text_isEmpty'://ok
			cont_text_isEmpty_ext++;
			while (cont_text_isEmpty_ext==1){
			var text_isEmpty_ext= document.getElementById('contentSuporte');
			text_isEmpty_ext.insertAdjacentHTML('beforeend', "<span id='textovazio'></span><ul class='list-group'><li class='list-group-item'><span class='label label-default'>Verificar texto vazio</span> Você utilizou este tipo de bloco <strong><span id='contempty'></span></strong> <span id='label_textovazio' data-toggle='tooltip' data-placement='right' title='Hi!'> vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Verifica se a string fornecida é vazia. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_text_isEmpty_ext++;	
			}
			document.getElementById('contempty').innerHTML = cont_text_isEmpty_ext-1;
			break;
				
			case 'text_indexOf':
			cont_text_indexOf_ext++;
			while (cont_text_indexOf_ext==1){
			var text_indexOf_ext= document.getElementById('contentSuporte');
			text_indexOf_ext.insertAdjacentHTML('beforeend', "<span id='ocorrenciatexto'></span><ul class='list-group'><li class='list-group-item'><span class='label label-default'>Ocorrência no texto</span> Você utilizou este tipo de bloco <strong><span id='contindexOf'></span></strong> <span id='label_ocorrenciatexto' data-toggle='tooltip' data-placement='right' title='Hi!'> vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Retorna a posição de uma substring específica na string ou a última posição da substring específica.  <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Formatando_texto#Métodos_de_String' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_text_indexOf_ext++;	
			}
			document.getElementById('contindexOf').innerHTML = cont_text_indexOf_ext-1;
			break;	
				
			case 'text_charAt':
			cont_text_charAt_ext++;
			while (cont_text_charAt_ext==1){
			var text_charAt_ext= document.getElementById('contentSuporte');
			text_charAt_ext.insertAdjacentHTML('beforeend', "<span id='letranotexto'></span><ul class='list-group'><li class='list-group-item'><span class='label label-default'>Obter letra no texto</span> Você utilizou este tipo de bloco <strong><span id='contcharAt'></span></strong> <span id='label_letranotexto' data-toggle='tooltip' data-placement='right' title='Hi!'> vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Retorna o caractere em uma posição específica na string. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Formatando_texto#Métodos_de_String' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_text_charAt_ext++;	
			}
			document.getElementById('contcharAt').innerHTML = cont_text_charAt_ext-1;
			break;	
				
			case 'text_getSubstring':
			cont_text_getSubstring_ext++;
			while (cont_text_getSubstring_ext==1){
			var text_getSubstring_ext= document.getElementById('contentSuporte');
			text_getSubstring_ext.insertAdjacentHTML('beforeend', "<span id='subtexto'></span><ul class='list-group'><li class='list-group-item'><span class='label label-default'>Obter subtexto</span> Você utilizou este tipo de bloco <strong><span id='contgetSubstring'></span></strong> <span id='label_subtexto' data-toggle='tooltip' data-placement='right' title='Hi!'> vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Extrai uma seção de uma string e retorna uma nova string. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Formatando_texto#Métodos_de_String' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_text_getSubstring_ext++;	
			}
			document.getElementById('contgetSubstring').innerHTML = cont_text_getSubstring_ext-1;
			break;		
			
			case 'text_changeCase':
			cont_text_changeCase_ext++;
			while (cont_text_changeCase_ext==1){
			var text_changeCase_ext= document.getElementById('contentSuporte');
			text_changeCase_ext.insertAdjacentHTML('beforeend', "<span id='ajustartexto'></span><ul class='list-group'><li class='list-group-item'><span class='label label-default'>Ajustar texto</span> Você utilizou este tipo de bloco <strong><span id='contchangeCase'></span></strong> <span id='label_ajustartexto' data-toggle='tooltip' data-placement='right' title='Hi!'> vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Retorna a string com todos caracteres em minúsculo, ou maiúsculo. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Formatando_texto#Métodos_de_String' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_text_changeCase_ext++;	
			}
			document.getElementById('contchangeCase').innerHTML = cont_text_changeCase_ext-1;
			break;	
			
			case 'text_trim':
			cont_text_trim_ext++;
			while (cont_text_trim_ext==1){
			var text_trim_ext= document.getElementById('contentSuporte');
			text_trim_ext.insertAdjacentHTML('beforeend', "<span id='espacotexto'></span><ul class='list-group'><li class='list-group-item'><span class='label label-default'>Remover espaços do texto</span> Você utilizou este tipo de bloco <strong><span id='conttrim'></span></strong> <span id='label_espacotexto' data-toggle='tooltip' data-placement='right' title='Hi!'> vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Retira espaços em branco no começo e no final da string. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Formatando_texto#Métodos_de_String' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_text_trim_ext++;	
			}
			document.getElementById('conttrim').innerHTML = cont_text_trim_ext-1;
			break;
			
			case 'text_print':
			cont_text_print_ext++;
			while (cont_text_print_ext==1){
			var text_print_ext= document.getElementById('contentSuporte');
			text_print_ext.insertAdjacentHTML('beforeend', "<span id='textprint'></span><ul class='list-group'><li class='list-group-item'><span class='label label-default'>Imprimir bloco</span> Você utilizou este tipo de bloco <strong><span id='contprint'></span></strong> <span id='label_textprint' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span>  Mostra uma caixa de diálogo de aviso com o conteúdo opcionalmente especificado e um botão OK. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert'target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_text_print_ext++;	
			}
			document.getElementById('contprint').innerHTML = cont_text_print_ext-1;
			break;
			
			
			case 'text_prompt_ext':
			cont_text_prompt_ext_xt++;
			while (cont_text_prompt_ext_xt==1){
			var text_prompt_ext_xt= document.getElementById('contentSuporte');
			text_prompt_ext_xt.insertAdjacentHTML('beforeend', "<span id='textprompt'></span><ul class='list-group'><li class='list-group-item'><span class='label label-default'>Obter entrada do usúario</span> Você utilizou este tipo de bloco <strong><span id='contprompt'></span></strong> <span id='label_textprompt' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Exibe uma caixa de diálogo com uma mensagem opcional solicitando ao usuário alguma entrada. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/API/Window/prompt'target='_blank'> MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_text_prompt_ext_xt++;	
			}
			document.getElementById('contprompt').innerHTML = cont_text_prompt_ext_xt-1;
			break;
			
			//*****Blocos de Listas*****
			
			case 'lists_create_with':
			cont_lists_create_with_ext++;
			while (cont_lists_create_with_ext==1){
			var lists_create_with_ext= document.getElementById('contentSuporte');
			lists_create_with_ext.insertAdjacentHTML('beforeend', "<span id='listwith'></span><ul class='list-group'><li class='list-group-item'><span class='label label-info'>Criar lista</span> Você utilizou este tipo de bloco <strong><span id='contlistcreatewith'></span></strong> <span id='label_listwith' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> É um conjunto de valores ordenados que você o referencia com um nome e um índice. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections#Objeto_Array' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_lists_create_with_ext++;	
			}
			document.getElementById('contlistcreatewith').innerHTML = cont_lists_create_with_ext-1;
			break;
			
			case 'lists_repeat':
			cont_lists_repeat_ext++;
			while (cont_lists_repeat_ext==1){
			var lists_repeat_ext= document.getElementById('contentSuporte');
			lists_repeat_ext.insertAdjacentHTML('beforeend', "<span id='repeticaolista'></span><ul class='list-group'><li class='list-group-item'><span class='label label-info'>Repetição na lista</span> Você utilizou este tipo de bloco <strong><span id='contlistrepeat'></span></strong> <span id='label_repeticaolista' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Iterar sobre os valores de uma lista, proecessando cada elemento de uma maneira. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections#Iteração_em_arranjos' target='_blank'> MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_lists_repeat_ext++;	
			}
			document.getElementById('contlistrepeat').innerHTML = cont_lists_repeat_ext-1;
			break;
			
			case 'lists_length':
			cont_lists_length_ext++;
			while (cont_lists_length_ext==1){
			var lists_length_ext= document.getElementById('contentSuporte');
			lists_length_ext.insertAdjacentHTML('beforeend', "<span id='tamanholista'></span><ul class='list-group'><li class='list-group-item'><span class='label label-info'>Tamanho da lista</span> Você utilizou este tipo de bloco <strong><span id='contlistlength'></span></strong> <span id='label_tamanholista' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span>  Retorna o tamanho de uma lista. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/length#Exemplos' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_lists_length_ext++;	
			}
			document.getElementById('contlistlength').innerHTML = cont_lists_length_ext-1;
			break;
			
			case 'lists_isEmpty':
			cont_lists_isEmpty_ext++;
			while (cont_lists_isEmpty_ext==1){
			var lists_isEmpty_ext= document.getElementById('contentSuporte');
			lists_isEmpty_ext.insertAdjacentHTML('beforeend', "<span id='listavazia'></span><ul class='list-group'><li class='list-group-item'><span class='label label-info'>Lista é vazia</span> Você utilizou este tipo de bloco <strong><span id='contlistempty'></span></strong> <span id='label_listavazia' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Verifica se a lista é vazia. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/length#Exemplos' target='_blank'> MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_lists_isEmpty_ext++;	
			}
			document.getElementById('contlistempty').innerHTML = cont_lists_isEmpty_ext-1;
			break;
			
			case 'lists_indexOf':
			cont_lists_indexOf_ext++;
			while (cont_lists_indexOf_ext==1){
			var lists_indexOf_ext= document.getElementById('contentSuporte');
			lists_indexOf_ext.insertAdjacentHTML('beforeend', "<span id='ocorrencialista'></span><ul class='list-group'><li class='list-group-item'><span class='label label-info'>Ocorrência na lista</span> Você utilizou este tipo de bloco <strong><span id='contlistindexof'></span></strong> <span id='label_ocorrencialista' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Procura na lista e retorna o índice da primeira ou última ocorrência. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections#Métodos_dos_Arrays' target='_blank'> MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_lists_indexOf_ext++;	
			}
			document.getElementById('contlistindexof').innerHTML = cont_lists_indexOf_ext-1;
			break;
			
			case 'lists_getIndex': //ver a questão dos Fields
			cont_lists_getIndex_ext++;
			while (cont_lists_getIndex_ext==1){
			var lists_getIndex_ext= document.getElementById('contentSuporte');
			lists_getIndex_ext.insertAdjacentHTML('beforeend', "<span id='obterlista'></span><ul class='list-group'><li class='list-group-item'><span class='label label-info'>Obter ou alterar na lista</span> Você utilizou este tipo de bloco <strong><span id='contgetindex'></span></strong> <span id='label_obterlista' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Obtem ou altera conteúdo da posição na lista. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_lists_getIndex_ext++;	
			}
			document.getElementById('contgetindex').innerHTML = cont_lists_getIndex_ext-1;
			break;
			
			case 'lists_setIndex': //ver a questão dos Fields
			cont_lists_setIndex_ext++;
			while (cont_lists_setIndex_ext==1){
			var lists_setIndex_ext= document.getElementById('contentSuporte');
			lists_setIndex_ext.insertAdjacentHTML('beforeend', "<span id='definirlista'></span><ul class='list-group'><li class='list-group-item'><span class='label label-info'>Inserir ou definir na lista</span> Você utilizou este tipo de bloco <strong><span id='contsetindex'></span></strong> <span id='label_inserirlista' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Insere ou defini conteudo em posição da lista. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections#Métodos_dos_Arrays' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_lists_setIndex_ext++;	
			}
			document.getElementById('contsetindex').innerHTML = cont_lists_setIndex_ext-1;
			break;
			
			case 'lists_getSublist': //ver a questão dos Fields
			cont_lists_getSublist_ext++;
			while (cont_lists_getSublist_ext==1){
			var lists_getSublist_ext= document.getElementById('contentSuporte');
			lists_getSublist_ext.insertAdjacentHTML('beforeend', "<span id='sublista'></span><ul class='list-group'><li class='list-group-item'><span class='label label-info'>Obter sublista</span> Você utilizou este tipo de bloco <strong><span id='contgetsublist'></span></strong> <span id='label_sublista' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Retorna uma cópia de parte de uma lista em uma nova lista. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_lists_getSublist_ext++;	
			}
			document.getElementById('contgetsublist').innerHTML = cont_lists_getSublist_ext-1;
			break;	
			
			case 'lists_split': 
			cont_lists_split_ext++;
			while (cont_lists_split_ext==1){
			var lists_split_ext= document.getElementById('contentSuporte');
			lists_split_ext.insertAdjacentHTML('beforeend', "<span id='listadelimitador'></span><ul class='list-group'><li class='list-group-item'><span class='label label-info'>Listas com delimitador</span> Você utilizou este tipo de bloco <strong><span id='contgetsublist'></span></strong> <span id='label_listadelimitador' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Obtem um texto ou lista com elementos separados por um delimitador. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split' target='_blank'> MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_lists_split_ext++;	
			}
			document.getElementById('contsplit').innerHTML = cont_lists_split_ext-1;
			break;
			
			case 'lists_sort': 
			cont_lists_sort_ext++;
			while (cont_lists_sort_ext==1){
			var lists_sort_ext= document.getElementById('contentSuporte');
			lists_sort_ext.insertAdjacentHTML('beforeend', "<span id='lis'></span><ul class='list-group'><li class='list-group-item'><span class='label label-info'>Ordenar lista</span> Você utilizou este tipo de bloco <strong><span id='contsort'></span></strong> <span id='label_listasort' data-toggle='tooltip' data-placement='right' title='Hi!'>vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> ordena os elementos da lista. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections#Métodos_dos_Arrays' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_lists_sort_ext++;	
			}
			document.getElementById('contsort').innerHTML = cont_lists_sort_ext-1;
			break;
			
			//*****Blocos de Variáveis*****
			
			case 'variables_set': 
			cont_variables_set_ext++;
			while (cont_variables_set_ext==1){
			var variables_set_ext= document.getElementById('contentSuporte');
			variables_set_ext.insertAdjacentHTML('beforeend', "<span id='setvariavel'></span><ul class='list-group'><li class='list-group-item'><span class='label label-danger'>Denifinir variável</span> Você utilizou este tipo de bloco <strong><span id='contvariableset'></span></strong> <span id='label_setvariavel' data-toggle='tooltip' data-placement='right' title='Hi!' >vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Por exemplo, var x = 42. Esta sintaxe pode ser usada para declarar tanto variáveis locais como variáveis globais. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Values%2C_variables%2C_and_literals#Declarando_variáveis' target='_blank'> MDN</a> <img src='img/mozila.png' height='20' width='30'></li> </ul>" );
			cont_variables_set_ext++;	
			}
			document.getElementById('contvariableset').innerHTML = cont_variables_set_ext-1;
			break;
			
			case 'variables_get': 
			cont_variables_get_ext++;
			while (cont_variables_get_ext==1){
			var variables_get_ext= document.getElementById('contentSuporte');
			variables_get_ext.insertAdjacentHTML('beforeend', "<span id='variavel'></span><ul class='list-group'><li class='list-group-item'><span class='label label-danger'>Variável</span> Você utilizou este tipo de bloco <strong><span id='contvariableget'></span></strong> <span id='label_variavel' data-toggle='tooltip' data-placement='right' title='Hi!' >vez(es).</span></li> <li class='list-group-item'><span class='glyphicon glyphicon-share-alt'></span> Você usa variáveis como nomes simbólicos para os valores em sua aplicação. O nome das variáveis, chamados de identificadores, obedecem determinadas regras. <em>Leia mais:</em> <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Values%2C_variables%2C_and_literals#Variáveis' target='_blank'>MDN</a> <img src='img/mozila.png' height='20' width='30'></li></ul>" );
			cont_variables_get_ext++;	
			}
			document.getElementById('contvariableget').innerHTML = cont_variables_get_ext-1;
			break;

			
			}	
		}
		
};
