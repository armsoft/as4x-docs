<html>
<head>
<title>Константы типов блокировок</title>
</head>

<body>

<p><font face="Arial"><big>Константы типов блокировок</big></font></p>

<p><font face="Arial">Т.к. эти константы объявлены в системном ядре, 
то нет необходимости в их дополнительном объявлении. Их можно использовать везде 
в скриптах, взамен их значений.</font></p>

<table border="1">
  <tr>
    <td width="20%"><font size="3" face="Arial"><b>Константа</b></font></td>
    <td width="20%"><font size="3" face="Arial"><b>Значение</b></font></td>
    <td width="60%"><font size="3" face="Arial"><b>Описание</b></font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial"><strong>ASConcurReadOnly</strong></font></td>
    <td width="20%" align="center"><font face="Arial"><strong>1</strong></font></td>
    <td width="60%"><font face="Arial">по умолчанию. Курсор 
	открывается только для чтения, обновления не допускаются.</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial"><strong>ASConcurLock</strong></font></td>
    <td width="20%" align="center"><font face="Arial"><strong>2</strong></font></td>
    <td width="60%"><font face="Arial">пессимистическая блокировка, 
	при которой множество строк в текущем курсоре блокируется до закрытия 
	курсора.</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial"><strong>ASConcurRowVer</strong></font></td>
    <td width="20%" align="center"><font face="Arial"><strong>3</strong></font></td>
    <td width="60%"><font face="Arial">оптимистическая блокировка, 
	основанная на идентификаторе строчки (идентификатором строчки обычно служит 
	колонка TimeStamp). Оптимистическая блокировка - это тип блокировки, при 
	которой множество строчек в курсоре, включая редактируемую строчку, &nbsp; 
	недоступно другим пользователям только на время использования метода <strong>
	Update</strong>, но доступно между методами <strong>Edit</strong> и <strong>
	Update</strong>. Если после сравнения идентификатора колонки будет 
	определено, что с момента последней выборки строчка изменена, тогда будет 
	выдано сообщение об ошибке.</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial"><strong>ASConcurValues</strong></font></td>
    <td width="20%" align="center"><font face="Arial"><strong>4</strong></font></td>
    <td width="60%"><font face="Arial">оптимистическая блокировка, 
	основанная на значении строчки. Если после сравнения значений колонок 
	строчки будет определено, что с момента последней выборки строчка изменена, 
	тогда будет выдано сообщение об ошибке.</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial"><strong>ASConcurBatch</strong></font></td>
    <td width="20%" align="center"><font face="Arial"><strong>5</strong></font></td>
    <td width="60%"><font face="Arial">оптимистическая блокировка 
	использующая режим пакетного обновления.</font></td>
  </tr>
</table>

<blockquote>
</blockquote>

<p><font face="Arial"><br>
Эти константы могут быть также использованы в качестве параметров метода <a
href="../Functions/ASDATA/OpenCursor.html">OpenCursor</a> источника данных, для 
определения типа блокировки в открываемом курсоре.</font></p>
</body>
</html>
