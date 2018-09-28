<html>
<head>
<title>AsMsgBox</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция AsMsgBox</font></strong></p>

<p><font face="Arial">Выводит на экран окно сообщения, в ожидании 
выбора пользователем некоторой кнопки и возвращает целое число, указывающее на 
код нажатой кнопки. </font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>AsMsgBox (</strong><em>Prompt, </em>[<em>Buttons</em>]<em>,
</em>[<em>Title</em>]<strong>, </strong>[<em>SecondsToShow</em>],[DetailsMsg],[EnglishPrompt],[EnglishTitle]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>AsMsgBox</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>Prompt</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее текст выводимого&nbsp; сообщения. Система автоматически совершит 
	дробление и перенос на новую строку текста сообщения. Но если вы желаете 
	внести символы переноса строки в тексте сообщения, то это можно сделать 
	внося в текст символы CHR(13).</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Buttons</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение, определяющее какие кнопки и сколько должны быть на форме и на 
	какой из них <br>
    будет фокус при активации формы, а также тип рисунка в левом верхнем углу. 
	Задается сумма значений необходимых констант.</font></td>
  </tr>
  <tr>
    <td width="29%" style="height: 47px"><font face="Arial"><em>Title</em></font></td>
    <td width="71%" style="height: 47px"><font face="Arial">необязательное строковое 
	выражение, определяющее заголовок диалогового окна сообщения.</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>SecondsToShow</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение целого типа, определяющее длительность показа сообщения в 
	секундах. По истечении времени сообщение автоматически закроется с&nbsp; 
	эмуляцией нажатия кнопки по умолчанию. Если параметр опущен, то сообщение 
	непрерывно будет на экране до нажатия одной из кнопок. Секунды желательно 
	установить на транзакционных прцедурах, во избежание нежелательного захвата 
	баз данных на неопределенное время. </font></td>
    </tr>
	<tr>
    <td width="29%"><font face="Arial">DetailsMsg</font></td>
    <td width="71%"><font face="Arial">необязательное строковое выражение, определяющее 
	детализованое сообщение.</font></td>
    </tr>
	<tr>
    <td width="29%"><font face="Arial">EnglishPrompt</font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее заголовок диалогового окна сообщения на аглийском 
	языке. </font></td>
    </tr>
  <tr>
    <td width="29%"><font face="Arial">EnglishTitle</font></td>
    <td width="71%"><font face="Arial">необязательное строковое выражение, 
	определяющее текст выводимого&nbsp; сообщения на аглийском языке.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Установки</b></font></p>

<p><font face="Arial">Установки для <em>Buttons</em>
следующие:</font></p>

<table border="1" cellPadding="5" cols="3" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="20%"><font face="Arial"><b>Константа</b></font></td>
    <td class="label" width="20%"><font face="Arial"><b>Значение</b></font></td>
    <td class="label" width="60%"><font face="Arial"><b>Описание</b></font></td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial"><b>vbOKOnly</b></font></td>
    <td width="20%"><font face="Arial">0</font></td>
    <td width="60%"><font face="Arial">Выводит только кнопку <b>OK</b>.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial"><b>vbOKCancel</b></font></td>
    <td width="20%"><font face="Arial">1</font></td>
    <td width="60%"><font face="Arial">Выводит кнопки<b> OK</b> и <b>
	Cancel</b>.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial"><b>vbAbortRetryIgnore</b></font></td>
    <td width="20%"><font face="Arial">2</font></td>
    <td width="60%"><font face="Arial">Выводит кнопки <b>Abort</b>, <b>
	Retry</b>, и <b>Ignore</b>.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial"><b>vbYesNoCancel</b></font></td>
    <td width="20%"><font face="Arial">3</font></td>
    <td width="60%"><font face="Arial">Выводит кнопки <b>Yes</b>, <b>
	No</b>, и <b>Cancel</b>.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial"><b>vbYesNo</b></font></td>
    <td width="20%"><font face="Arial">4</font></td>
    <td width="60%"><font face="Arial">Выводит кнопки <b>Yes</b> и <b>
	No</b>.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial"><b>vbRetryCancel</b></font></td>
    <td width="20%"><font face="Arial">5</font></td>
    <td width="60%"><font face="Arial">Выводит кнопки <b>Retry</b> и <b>
	Cancel</b>.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial"><b>vbCritical</b></font></td>
    <td width="20%"><font face="Arial">16</font></td>
    <td width="60%"><font face="Arial">Выводит иконку<b> Critical 
	Message</b> <img src="../../../../../IMAGES/CRITICAL.GIF" width="33" height="33"
    alt="Critical.gif (257 bytes)"> </font></td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial"><b>vbQuestion</b></font></td>
    <td width="20%"><font face="Arial">32</font></td>
    <td width="60%"><font face="Arial">Выводит иконку<b> Warning Query</b>
    <img src="../../../../../IMAGES/Question.gif" width="33" height="33"
    alt="Question.gif (263 bytes)"></font></td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial"><b>vbExclamation</b></font></td>
    <td width="20%"><font face="Arial">48</font></td>
    <td width="60%"><font face="Arial">Выводит иконку<b> Warning 
	Message</b> <img src="../../../../../IMAGES/Exclamation.gif" width="33" height="33"
    alt="Exclamation.gif (244 bytes)"></font></td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial"><b>vbInformation</b></font></td>
    <td width="20%"><font face="Arial">64</font></td>
    <td width="60%"><font face="Arial">Выводит иконку<b> Information 
	Message</b> <img src="../../../../../IMAGES/Information.gif" width="33" height="33"
    alt="Information.gif (256 bytes)"></font></td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial"><b>vbDefaultButton1</b></font></td>
    <td width="20%"><font face="Arial">0</font></td>
    <td width="60%"><font face="Arial">Первая кнопка является кнопкой 
	по умолчанию.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial"><b>vbDefaultButton2</b></font></td>
    <td width="20%"><font face="Arial">256</font></td>
    <td width="60%"><font face="Arial">Вторая кнопка является кнопкой 
	по умолчанию.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial"><b>vbDefaultButton3</b></font></td>
    <td width="20%"><font face="Arial">512</font></td>
    <td width="60%"><font face="Arial">Третья кнопка является кнопкой 
	по умолчанию.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial"><b>vbDefaultButton4</b></font></td>
    <td width="20%"><font face="Arial">768</font></td>
    <td width="60%"><font face="Arial">Четвертая кнопка является 
	кнопкой по умолчанию.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial">Функция <strong>AsMsgBox </strong>
возвращает следующие значения:</font></p>

<p class="label"><font face="Arial">&nbsp;</font></p>

<table border="1" cellPadding="5" cols="3" frame="below" rules="rows">
  <tr>
    <td class="label" width="33%"><font face="Arial"><b>Константа</b></font></td>
    <td class="label" width="33%"><font face="Arial"><b>Значение</b></font></td>
    <td class="label" width="33%"><font face="Arial"><b>Нажата Кнопка</b></font></td>
  </tr>
  <tr>
    <td width="33%"><font face="Arial"><b>vbOK</b></font></td>
    <td width="33%"><font face="Arial">1</font></td>
    <td width="33%"><font face="Arial">OK</font></td>
  </tr>
  <tr>
    <td width="33%"><font face="Arial"><b>vbCancel</b></font></td>
    <td width="33%"><font face="Arial">2</font></td>
    <td width="33%"><font face="Arial">Cancel</font></td>
  </tr>
  <tr>
    <td width="33%"><font face="Arial"><b>vbAbort</b></font></td>
    <td width="33%"><font face="Arial">3</font></td>
    <td width="33%"><font face="Arial">Abort</font></td>
  </tr>
  <tr>
    <td width="33%"><font face="Arial"><b>vbRetry</b></font></td>
    <td width="33%"><font face="Arial">4</font></td>
    <td width="33%"><font face="Arial">Retry</font></td>
  </tr>
  <tr>
    <td width="33%"><font face="Arial"><b>vbIgnore</b></font></td>
    <td width="33%"><font face="Arial">5</font></td>
    <td width="33%"><font face="Arial">Ignore</font></td>
  </tr>
  <tr>
    <td width="33%"><font face="Arial"><b>vbYes</b></font></td>
    <td width="33%"><font face="Arial">6</font></td>
    <td width="33%"><font face="Arial">Yes</font></td>
  </tr>
  <tr>
    <td width="33%"><font face="Arial"><b>vbNo</b></font></td>
    <td width="33%"><font face="Arial">7</font></td>
    <td width="33%"><font face="Arial">No</font></td>
  </tr>
</table>

<p class="label"><font face="Arial">&nbsp;</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../../functions.html"><font face="Arial">
См. также</font></a></p>
</body>
</html>
