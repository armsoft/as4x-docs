﻿<html>
<head>
<title>Tree</title>
</head>

<body>

<h1><font size="4" face="Arial">Объект дерево</font></h1>

<p><font face="Arial">Дерево должно быть <a
href="../Defs/Tree.html">заранее описано</a> и загружено в систему. Доступ к 
описанию объекта дерево происходит через функцию <a href="Functions/SysDefManagment/Tree.html">
Tree</a>.</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><strong>Свойства</strong></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a
    href="ASTree/AllowAddNode.html">AllowAddNode</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает 
	разрешение на добавление узла в дереве.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a
    href="ASTree/AllowDelete.html">AllowDelete</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает 
	разрешение на удаление документа из дерева.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a href="ASTree/AllowEdit.html">
	AllowEdit</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает 
	разрешение на корректировку документа в дереве.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial">
	<a href="ASTREE/AllowExport.html">AllowExport</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает 
	разрешение на экспортирование документа в дереве.</font></td>
  </tr>
    <tr>
    <td class="label" width="29%"><a href="ASTREE/AllowSelectNonDoc.html"><font face="Arial">
        AllowSelectNonDoc</font></a></td>
    <td class="label" width="71%"><font face="Arial">Возвращает разрешение на выбор не 
        документальных узлов дерева-справочника.</font></td>
    </tr>
  <tr>
    <td class="label" width="29%"><a href="ASTREE/AllowView.html"><font face="Arial">
	AllowView</font></a></td>
    <td class="label" width="71%"><font face="Arial">Возвращает 
	разрешение на просмотр документа в дереве.</font></td>
  </tr>
    <tr>
    <td class="label" width="29%"><font face="Arial"><a href="ASTree/Caption.html">
	Caption</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает значение заголовка дерева-справочника.</font></td>
    </tr>
    <tr>
    <td class="label" width="29%"><font face="Arial"><a href="ASTree/CodeLen.html">
	    CodeLen</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или устанавливает длину 
        кода дерева.</font></td>
    </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial">
	<a href="ASTREE/DisableDocFunctions.html">DisableDocFunctions</a></font></td>
    <td class="label" width="71%"><font face="Arial">Устанавливает или 
	снимает запрет на использование функций документа в дереве.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><a href="ASTREE/ECaption.html"><font face="Arial">
	ECaption</font></a></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает значение на иностранном языке заголовка дерева-справочника.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a href="ASTree/TreeId.html">
	TreeId</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает 
	значение идентификатора дерева.</font></td>
  </tr>
    <tr>
    <td class="label" width="29%"><font face="Arial"><a href="ASTree/TreeTypeInteger.html">
	    TreeTypeInteger</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или устанавливает 
        значение типа дерева.</font></td>
    </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial">
    <a href="ASTREE/Uppercase.html">UpperCase</a></font><br />
      </td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает признак транслации строчных букв английского алфавита в 
	заглавные в коде добавляемой ветви.</font></td>
  </tr>
</table>

<p>&nbsp;</p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><strong>Методы</strong></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><a href="ASTREE/AddDoc.html"><font face="Arial">
	AddDoc</font></a></td>
    <td class="label" width="71%"><font face="Arial">Добавляет 
	возможность создания нового типа документа в дереве.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a href="ASTREE/AddNode.html">
	AddNode</a></font></td>
    <td class="label" width="71%"><font face="Arial">Добавляет в 
	дерево новый узел.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><a href="ASTREE/ClearAllDocs.html"><font
    face="Arial">ClearAllDocs</font></a></td>
    <td class="label" width="71%"><font face="Arial">Удаляет 
	возможность добавления документа дереве.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a href="ASTREE/DeleteNode.html">
	DeleteNode</a></font></td>
    <td class="label" width="71%">

<p><font face="Arial">Удаляет ветвь из дерева.</font></p>

    </td>
  </tr>
  </table>
</body>
</html>