﻿<html>
<head>
<title>CH()</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Тип данных CH( )</font></strong></p>

<p class="label"><font face="Arial">Тип данных комментарий,
который берется из дерева-справочника. Причем из
указанного дерева могут выбираться наименования
с любой глубины дерева. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>CH</strong>(<em>sTree, nLen [,nLabelLen]</em>)</font></p>

<p><font face="Arial">Синтаксис типа <strong>CH</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="79%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sTree</em></font></td>
    <td width="79%"><font face="Arial">строковое выражение,
    определяющее идентификатор дерева-справочника,
    который является источником комментария</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">nLen</font></em></td>
    <td width="79%"><font face="Arial">числовое выражение,
    определяющее количество символов в комментарии.&nbsp; Максимально допустимое 
        значение для колонок
        грид таблицы равно 255 
	символов, а в остальных случаях равно 512.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nLabelLen</em></font></td>
    <td width="79%"><font face="Arial"><span lang="ru">необязательное
	</span>числовое выражение,
    определяющее количество символов в <span>сопроводительному<span lang="ru">
	</span></span><span lang="ru">тексту к </span>комментари<span lang="ru">ю. 
	По умолчанию равно 0, иными <span>словами сопроводительный текст 
	отсутствует.</span></span></font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><a href="../types.html">См. также</a></font></p>

<p class="label">&nbsp;</p>

<p><font size="3" face="Arial"><strong>Пример использования
типа CH</strong></font></p>

<p><font face="Arial">CH(PlatPol, 32) - возвращается 32
символьное значение из дерева - справочника PlatPol.</font></p>
</body>
</html>