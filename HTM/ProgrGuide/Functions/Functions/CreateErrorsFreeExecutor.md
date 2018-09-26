<html>
<head>
<title>CreateErrorsFreeExecutor</title>
<style type="text/css">
.auto-style2 {
	font-family: Arial;
}
</style>
</head>

<body>

<h1><font face="Arial"><font size="4">Функция CreateErrorsFreeExecutor<br>
</font><a href="../AsErrorsFreeExecutor.html"><font size="3"><strong>свойства&nbsp;&nbsp; 
методы</strong></font></a></font></h1>

<p><font face="Arial">Создает новый экземпляр класса <span class="auto-style2">
AsErrorsFreeExecutor</span>, для исполнения скриптовой процедуры в режиме, когда возникавшие ошибки 
не передаются обработчику, а сохраняются в отчете.</font></p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>set</strong> <em>sNewErrorsFreeExecutor</em><strong>
= CreateErrorsFreeExecutor<b> </b></strong><i>(sModName, sSubName, [sErrorReportingSubName 
As String], [bReturnsObject])</i></font></p>

<p><font face="Arial">Синтаксис функции <strong>
CreateErrorsFreeExecutor</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>sNewErrorsFreeExecutor</em></font></td>
    <td width="71%"><font face="Arial">переменная, ссылающаяся на 
	новый экземпляр исполнителя процедур.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><i>sModName</i></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее имя модуля.</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><i>sSubName</i></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее имя процедуры.</font></td>
    </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><i>sErrorReportingSubName </i></font></td>
    <td width="71%"><font face="Arial">необязательное строковое выражение, 
	определяющее имя процедуры вывода дополнительных сообщений об ошибках.</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><i>bReturnsObject</i></font></td>
    <td width="71%"><font face="Arial">необязательное логическое выражение, определяющее 
        тип возвращаемых значений методов <a href="../AsErrorsFreeExecutor/Run_Err.html">Run</a> и <a href="../AsErrorsFreeExecutor/RunEx_Err.html">RunEx</a>. 
        Если значение данного параметра будет равно True, то&nbsp; возвращаемые значения 
        этих методов будут ссылками на экземпляр объекта, в противном случае - не будут. По 
        умолчанию принимает значение False.</font></td>
    </tr>
</table>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../constructors.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>
</body>
</html>
