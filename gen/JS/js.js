var variable
var est = false
$(document).ready(function () {
	$.getJSON("DATA/data.json", function (data) {


		var col = data.length;
		var idd = 0;
		for (var i = 0; i < col; i++, idd++) {
			if(data[i].wrk == "on"){
			document.body.insertAdjacentHTML('afterBegin', '<div oncontextmenu= "return false;" id = "' + idd + '"  class="main_box2" ></div>');
		}else{}
			$('#' + idd).css('width', data[i].width);
			$('#' + idd).css('height', data[i].height);
			$('#' + idd).css('backgroundColor', data[i].bg);
			$('#' + idd).css('border', data[i].border);
			$('#' + idd).css('position', data[i].position);
			$('#' + idd).css('top', data[i].top);
			$('#' + idd).css('left', data[i].left);
			$('#' + idd).css('z-index', data[i].zindex);



			$(".main_box2").draggable();
			$(".main_box2").resizable();
			$(".main_box2").resizable("disable");
			$(".main_box2").float
			$(document).click(function (e) {
				if ($(e.target).closest('.main_box2').length) {
					$(e.target).closest('.main_box2').resizable();
					$(".main_box2").resizable("disable");
					$(e.target).closest('.main_box2').resizable("enable");
					return;
					
				}
				$(".main_box2").resizable("disable");


			});
			$(".main_box2").mouseup(function (e) {
				var variable = $(this).attr('id');
				$.post(
					"DATA/svpos.php",
					{

						"pos": {
							"width": $(this).css('width'),
							"height": $(this).css('height'),
							"bg": $(this).css('backgroundColor'),
							"border": $(this).css('border'),
							"position": $(this).css('position'),
							"top": $(this).css('top'),
							"left": $(this).css('left'),
							"zindex": $(this).css('z-index'),

						},
						"pos2": { "id": variable }

					},
				);

			});

			$('.main_box2').mouseup(function (event1) {
				
				 variable = $(this).attr('id');
				event1.preventDefault();
 if (event1.button == 2) {					
					var X = event1.pageX;
					var Y = event1.pageY;
					if(est == true){
						document.getElementById('del').outerHTML = "";
						est = false
						 }
					document.body.insertAdjacentHTML('afterBegin', '<div oncontextmenu= "return false;" id="del" style="left:' + X + 'px; top:' + Y + 'px;" class="dl_btn" >Удалить</div>');
					est = true
					event1.button = 0;
				}

			});
			$(document).click(function (e) {
				if ($(e.target).closest('.dl_btn').length) {

					$.post(
						"DATA/del.php",
						{
								"del": {
									"wrk": "off",
									"id": variable
								}
						}
					);
					
					document.getElementById(variable).outerHTML = "";
					document.getElementById('del').outerHTML = "";
					est = false
					return;
				}
				if(est == true){
					document.getElementById('del').outerHTML = "";
					est = false
					 }

			});
		}

	});
});

//Левое меню----------------------------------------------------------------------------------------------------------------------------------------------------
var closee=false
function menu_hide() {
    
    if (closee == true ){
        document.getElementById('menu').style.left = '0%';
        document.getElementById('menu_hide').style.left = '20%';
        closee=false;
    }else{
        document.getElementById('menu').style.left = '-20%' ;
        document.getElementById('menu_hide').style.left = '0%';
         closee=true;}
}
//Добавление блоков----------------------------------------------------------------------------------------------------------------------------------------------------
var col =0;
function db_box1() {


	document.getElementById('menu').style.left = '-20%' ;
	document.getElementById('menu_hide').style.left = '0%';
	closee=true;
	
	 $.getJSON("DATA/data.json", function (data) {
		
		col = data.length;
		
		

		document.body.insertAdjacentHTML('afterBegin', '<div id = "' + col + '"  class="main_box2" ></div>');
		ajax();
		$(".main_box2").mouseup(function (e) {
			var variable = $(this).attr('id');
			$.post(
				"DATA/svpos.php",
				{

					"pos": {
						"width": $(this).css('width'),
						"height": $(this).css('height'),
						"bg": $(this).css('backgroundColor'),
						"border": $(this).css('border'),
						"position": $(this).css('position'),
						"top": $(this).css('top'),
						"left": $(this).css('left'),
						"zindex": $(this).css('z-index'),

					},
					"pos2": { "id": variable }

				},
			);

		});
		
		
		$(".main_box2").draggable();
		$(".main_box2").resizable();
		$(".main_box2").resizable("disable");
		$(".main_box2").float;
		$(document).click(function (e) {
			if ($(e.target).closest('.main_box2').length) {
				$(e.target).closest('.main_box2').resizable();
				$(".main_box2").resizable("disable");
				$(e.target).closest('.main_box2').resizable("enable");
				return;
			}
			$(".main_box2").resizable("disable");
		});

	 });
}
 



 function db_text1() {
    document.body.insertAdjacentHTML ('afterBegin', '<div  class="text_box" contenteditable="true">Введите текст</div>')
	$(".text_box").draggable();
	$(".text_box" ).resizable();
	$(document).click( function(e){
		if ( $(e.target).closest('.text_box').length ) {
			$(".text_box" ).resizable("enable");
			$(e.target).closest('.text_box').draggable();
			$(e.target).closest('.text_box').resizable();
			$(e.target).closest('.text_box').draggable("disable");
			$(e.target).closest('.text_box').resizable("disable");
			return;
		}
		$(".text_box" ).resizable("enable");    
		$(".text_box").draggable("enable");
	});
    }

    
//Редактор текста----------------------------------------------------------------------------------------------------------------------------------------------------
 // Жирный (b)
$('body').on('click', '.toolbar-b', function(){
	document.execCommand('bold', false, null);
	return false;
});

// Курсив (i)
$('body').on('click', '.toolbar-i', function(){
	document.execCommand('italic', false, null);
	return false;
});

// Подчёркнутый текст (u)
$('body').on('click', '.toolbar-u', function(){
	document.execCommand('underline', false, null);
	return false;
});

// Зачёркнутый текст (strike)
$('body').on('click', '.toolbar-s', function(){
	document.execCommand('strikethrough', false, null);
	return false;
});

// Верхний индекс (sup)
$('body').on('click', '.toolbar-sup', function(){
	document.execCommand('superscript', false, null);
	return false;
});

// Нижний индекс (sub)
$('body').on('click', '.toolbar-sub', function(){
	document.execCommand('subscript', false, null);
	return false;
});

// Маркированный список (ul)
$('body').on('click', '.toolbar-ul', function(){
	document.execCommand('insertUnorderedList', false, null);
	return false;
});

// Нумерованный список (ol)
$('body').on('click', '.toolbar-ol', function(){
	document.execCommand('insertOrderedList', false, null);
	return false;
});

// Параграф (p)
$('body').on('click', '.toolbar-p', function(){
	document.execCommand('formatBlock', false, 'p');
	return false;
});

// Заголовок (h1)
$('body').on('click', '.toolbar-h1', function(){
	document.execCommand('formatBlock', false, 'h1');
	return false;
});

// Горизонтальная линия (hr) 
$('body').on('click', '.toolbar-hr', function(){
	document.execCommand('insertHorizontalRule', false, null);
	return false;
});

// Цитата (blockquote)
$('body').on('click', '.toolbar-blockquote', function(){
	document.execCommand('formatBlock', false, 'blockquote');
	return false;
});	

// Изображение (img)
$('body').on('click', '.toolbar-img', function(){
	var url = prompt('Введите адрес изображения', '');
	document.execCommand('insertImage', false, url);
	return false;
});

// Ссылка (a)
$('body').on('click', '.toolbar-a', function(){
	var url = prompt('Введите URL', '');
	document.execCommand('CreateLink', false, url);
	return false;
});

// Удаление ссылки
$('body').on('click', '.toolbar-unlink', function(){
	document.execCommand('unlink', false, null);
	return false;
});

// Вставить html
$('body').on('click', '.toolbar-html', function(){
	var html = prompt('Введите HTML код', '');
	document.execCommand('insertHTML', false, html);
	return false;
});

// Вставить текст
$('body').on('click', '.toolbar-text', function(){
	var text = prompt('Введите текст', '');
	document.execCommand('insertText', false, text);
	return false;
});

// Выравнивание текста по левому краю
$('body').on('click', '.toolbar-left', function(){
	document.execCommand('justifyLeft', false, null);
	return false;
});

// Выравнивание текста по центру
$('body').on('click', '.toolbar-center', function(){
	document.execCommand('justifyCenter', false, null);
	return false;
});

// Выравнивание текста по правому краю
$('body').on('click', '.toolbar-right', function(){
	document.execCommand('justifyRight', false, null);
	return false;
});

// Выравнивание по ширине
$('body').on('click', '.toolbar-justify', function(){
	document.execCommand('justifyFull', false, null);
	return false;
});

// Шрифт
$('body').on('input', '.toolbar-font', function(){
	var val = $(this).val();
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontName', false, val);
	document.execCommand('styleWithCSS', false, false);
});

// Размер шрифта
$('body').on('input', '.toolbar-size', function(){
	var val = $(this).val();
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontSize', false, val);
	document.execCommand('styleWithCSS', false, false);
});

// Цвет шрифта
$('body').on('input', '.toolbar-color', function(){
	var val = $(this).val();
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('foreColor', false, val);
	document.execCommand('styleWithCSS', false, false);
});

// Цвет фона
$('body').on('input', '.toolbar-bg', function(){
	var val = $(this).val();
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('hiliteColor', false, val);
	document.execCommand('styleWithCSS', false, false);
});

// Отмена
$('body').on('click', '.toolbar-undo', function(){
	document.execCommand('undo', false, null);
	return false;
});

// Повтор
$('body').on('click', '.toolbar-redo', function(){
	document.execCommand('redo', false, null);
	return false;
});

// Удалить
$('body').on('click', '.toolbar-delete', function(){
	document.execCommand('delete', false, null);
	return false;
});

// Выделить всё
$('body').on('click', '.toolbar-selectAll', function(){
	document.execCommand('selectAll', false, null);
	return false;
});

// Очистить стили
$('body').on('click', '.toolbar-removeFormat', function(){
	document.execCommand('removeFormat', false, null);
	return false;
});

// Вырезать
$('body').on('click', '.toolbar-cut', function(){
	document.execCommand('cut', false, null);
	return false;
});

// Копировать
$('body').on('click', '.toolbar-copy', function(){
	document.execCommand('copy', false, null);
	return false;
});

function ajax() {
	
	$.post(
		"DATA/script.php",
		{
				"data": {
					"width": $('.main_box2').css('width'),
					"height": $('.main_box2').css('height'),
					"bg": $('.main_box2').css('backgroundColor'),
					"border": $('.main_box2').css('border'),
					"position": $('.main_box2').css('position'),
					"top": $('.main_box2').css('top'),
					"left": $('.main_box2').css('left'),
					"visibility": $('.main_box2').css('visibility'),
					"zindex": $('.main_box2').css('z-index'),
					"wrk": "on"
				},
		},
	);
};