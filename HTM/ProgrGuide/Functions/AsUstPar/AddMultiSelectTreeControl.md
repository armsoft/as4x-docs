<html>
<head>
<title>Диалог\AddMultiSelectTreeControl</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Метод AddMultiSelectTreeControl<br>
<br>
</strong></font><font face="Arial"><a href="AddMultiSelectViewControl.html">См. 
также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../Asustpar.html">Применяется к</a></font></p>

<p><font face="Arial">Добавляет в пользовательский диалог реквизит 
типа дерева-справочника, с возможностью отбора нескольких 
строк. Наименование приводится исходя из системного языка.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>call</strong> <em>object</em>.<strong>AddMultiSelectTreeControl 
(</strong><em>sControlName, sControlCaption, sControlЕCaption, sTreeId</em><strong>, </strong>
<em>
&nbsp;</em>[<em>AttribRekv</em>]<em>, </em>[<em>ValueRekv</em>], [<em>FullTree</em>], 
    [<em>MultiSelectMode</em>])</font></p>

<p><font face="Arial">Синтаксис метода <strong>
AddMultiSelectTreeControl</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">object</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее переменную, ссылающуюся на экземпляр объекта пользовательского 
	диалога.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">sControlName</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор реквизита в диалоге.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sControlCaption</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее заголовок реквизита в диалоге.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sControlЕCaption</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее заголовок реквизита в диалоге на иностранном языке.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sTreeId</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, определяющее 
	идентификатор дерева-справочника.</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><em><font face="Arial">AttribRekv</font></em></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее <a href="Attribute.html">атрибуты</a>
    реквизита (их может быть несколько). </font></td>
  </tr>
<tr>
    <td width="29%"><em><font face="Arial">ValueRekv</font></em></td>
    <td width="71%"><font face="Arial">необязательное выражение типа 
	Variant, определяющее первоначальное значение реквизита.</font></td>
  </tr>
    <tr>
    <td width="29%"><em><font face="Arial">FullTree</font></em></td>
    <td width="71%"><font face="Arial">необязательное выражение типа 
	Boolean. При значении True допускается выбор листьев дерева любого уровня, при False - 
	только листья последнего уровня. По умолчанию принимает значение True.</font></td>
    </tr>
    <tr>
    <td width="29%"><em><font face="Arial">MultiSelectMode</em></td>
    <td width="71%"><font face="Arial">необязательное выражение типа 
	Long, определяющее вид отоброжения дерева-справочника. 
        <br />
        При значении 0 открывается вспомогательный список содержащий две колонки: код и наименование из дерева-справочника. 
    При значении 1 открывается дерево-справочник с возможностью выбора нескольких строк 
        с помошью отметок возле узлов. По умолчанию принимает значение 0.</font></td>
    </tr>
    
  </table>

</body>
</html>
