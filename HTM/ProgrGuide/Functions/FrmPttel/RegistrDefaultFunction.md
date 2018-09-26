<html>
<head>
<title>Текущий вид просмотра\RegistrDefaultFunction</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод RegistrDefaultFunction<br>
<br>
</font></strong><font face="Arial"><a href="../Frmpttel.html">См. также</a>&nbsp;
<a href="../../Examples/E_FrmPttel_RegistrDefaultFunction.html">Пример</a>&nbsp; <a
href="../Frmpttel.html">Применяется к</a></font></p>

<p><font face="Arial">Устанавливает функцию по умолчанию для контекстного меню.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.RegistrDefaultFunction (</strong><em>RunSub)</em></font></p>

<p><font face="Arial">Синтаксис метода <strong>RegistrDefaultFunction</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>object</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее переменную, ссылающуюся на текущую папку.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>RunSub</em></font></td>
    <td width="71%"><font face="Arial">обязательное строковое 
	выражение, определяющее имя процедуры из контекстного меню, которую нужно устанавить 
        как функцию по умолчанию. </font></td>
  </tr>
</TBODY>
  </table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примеание</b></font></p>

<p class="label"><font face="Arial">Данный метод должен быть вызван в 
обработчике системного события
<a href="../../ScriptProcs/FunctionsData.html">Functions</a>. Процедура,устанавливающаяся 
    как функция по умолчанию, должна быть описана в скриптовой части описания 
источника данных, но для <a href="../Functions/InterfaceManagment/CurrentView.html">
текущего вида просмотра</a>.</font></p>
</body>
</html>
