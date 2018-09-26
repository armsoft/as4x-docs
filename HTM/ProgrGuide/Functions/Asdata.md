<html>
<head>
<title>Data</title>
<style type="text/css">
.style1 {
	color: #0000FF;
	text-decoration: underline;
}
</style>
</head>

<body>

<h1><font size="4" face="Arial">Объект источник данных</font></h1>

<p><font face="Arial">Источник данных должен быть <a
href="../Defs/Data.html">заранее описан</a> и загружен в систему. Доступ к 
источнику данных из скрипта обеспечивается через функцию <a href="Functions/SysDefManagment/Data.html">
Data</a>.</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><strong>Свойства</strong></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td class="label" width="29%"><strong style="font-weight: 400">
    <font face="Arial"><a href="ASDATA/ArrayBased.html">ArrayBased</a></font></strong></td>
    <td class="label" width="71%"><font face="Arial">Возвращает 
	признак того, является ли источник данных основанным на SQL запросе или на 
	объекте типа XArrayDB.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><a href="ASDATA/Caption.html">
	Caption</a></font></td>
    <td width="71%"><font face="Arial">Возвращает заголовок источника 
	данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial">
	<a href="ASDATA/CurrentIndicate.html">CurrentIndicate</a></font></td>
    <td width="71%"><font face="Arial">Возвращает текущий
	<a href="../Constants/const_opencursor_Indicate.html">вид индикатора</a> 
	выполнения запроса источника данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><a href="ASDATA/CursorRowCount.html">
	CursorRowCount</a></font></td>
    <td width="71%"><font face="Arial">Возвращает количество строк в 
	открытом источнике данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><a href="ASDATA/DColCount.html">
	DColCount</a></font></td>
    <td width="71%"><font face="Arial">Возвращает количество колонок в 
	источнике данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial">
	<a href="ASDATA/DefaultIndicate.html">DefaultIndicate</a></font></td>
    <td width="71%"><font face="Arial">Возвращает
	<a href="../Constants/const_opencursor_Indicate.html">вид индикатора</a> 
	выполнения запроса источника данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial">
	<a href="ASDATA/DisableValidFunction.html">DisableValidFunction</a></font></td>
    <td width="71%"><font face="Arial">Свойство позволяет блокировать 
	вызов события
	<a href="../ScriptProcs/Valid_Data.html">Valid</a> источника данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><a href="AsData/DParCount.html">
	DParCount</a></font></td>
    <td width="71%"><font face="Arial">Возвращает количество 
	параметров к SQL запросу в источнике данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><a href="ASDATA/ECaption.html">
	ECaption</a></font></td>
    <td width="71%"><font face="Arial">Возвращает заголовок источника 
	данных на иностранном языке.</font></td>
  </tr>
  <tr>
    <td width="29%"><a href="ASDATA/EOF.html"><font face="Arial">EOF</font></a></td>
    <td width="71%"><font face="Arial">Возвращает признак конца в 
	источнике данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><a href="ASDATA/Formatted.html">
	Formatted</a></font></td>
    <td width="71%"><font face="Arial">Возвращает символьное значение 
	колонки для текущей строки курсора источника данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><a href="ASDATA/IndicateCaption.html"><font face="Arial">
	IndicateCaption</font></a></td>
    <td width="71%"><font face="Arial">Возвращает или устанавливает 
	заголовок формы индикатора выполнения запроса источника данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><a href="AsData/Name.html">Name</a></font></td>
    <td width="71%"><font face="Arial">Возвращает идентификатор 
	источника данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><a href="ASDATA/Parameters.html"><font face="Arial">
	Parameters</font></a></td>
    <td width="71%"><font face="Arial">Возвращает или устанавливает 
	значение параметра для SQL запроса источника данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><a href="AsData/SQL.html">SQL</a></font></td>
    <td width="71%"><font face="Arial">Возвращает SQL запрос источника 
	данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><a href="ASDATA/UpdateSQL.html">
	UpdateSql</a></font></td>
    <td width="71%"><font face="Arial">Возвращает SQL запрос источника 
	данных выполняющийся при обновлении источника данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><a href="ASDATA/Value.html"><font face="Arial">
	Value</font></a></td>
    <td width="71%"><font face="Arial">Возвращает значение колонки 
	источника данных для текущей строки.</font></td>
  </tr>
</table>

<p>&nbsp;</p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><strong>Методы</strong></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><a href="ASDATA/ClearParameters.html">
	ClearParameters</a></font></td>
    <td width="71%"><font face="Arial">Очищает список параметров для 
	SQL запроса источника данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><a href="ASDATA/CloseCursor.html">
	CloseCursor</a></font></td>
    <td width="71%"><font face="Arial">Закрывает открытый курсор 
	источника данных. </font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial">
	<a href="ASDATA/CloseUpdateCursor.html">CloseUpdateCursor</a></font></td>
    <td width="71%"><font face="Arial">Закрывает открытый курсор 
	обновления источника данных.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><a href="ASDATA/MoveFirst.html">
	MoveFirst</a></font></td>
    <td width="71%"><font face="Arial">Передвигает позицию маркера в 
	открытом источнике данных на первую строку.</font></td>
  </tr>
  <tr>
    <td width="29%"><a href="ASDATA/MoveLast.html"><font face="Arial">
	MoveLast</font></a></td>
    <td width="71%"><font face="Arial">Передвигает позицию маркера в 
	открытом источнике данных на последнюю строку.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><a href="ASDATA/MoveNext.html">
	MoveNext</a></font></td>
    <td width="71%"><font face="Arial">Передвигает позицию маркера в 
	открытом источнике данных на следующую строку.</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><a href="ASDATA/MovePrevious.html">
	MovePrevious</a></font></td>
    <td width="71%"><font face="Arial">Передвигает позицию маркера в 
	открытом источнике данных на предыдущую строку.</font></td>
    </tr>
  <tr>
    <td width="29%"><font face="Arial"><a href="ASDATA/OpenCursor.html">
	OpenCursor</a></font></td>
    <td width="71%"><font face="Arial">Открывает курсор источника 
	данных. </font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial">
	<a href="ASDATA/OpenUpdateCursor.html">OpenUpdateCursor</a></font></td>
    <td width="71%"><font face="Arial">ООткрывает курсор обновления 
	источника данных.</font></td>
  </tr>
  <tr>
    <td width="29%" class="style1"><font face="Arial">
	<a href="ASDATA/RSColValue.html">RSColValue</a></font></td>
    <td width="71%"><font face="Arial">Возвращает значение колонки результата SQL <span lang="ru">запроса на 
котором&nbsp;основан </span>источник данных.</font></td>
  </tr>
</table>
</body>
</html>
