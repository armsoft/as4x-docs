---
layout: page
title: "ExistsFolder ֆունկցիա"
---

## ExistsFolder ֆունկցիա

Վերադարձնում է նշված նույնականացուցիչով թղթապանակի առկայությունը։ 

Վերադարձվող արժեքը տրամաբանական է։ 
Возвращает наличие папки с заданным идентификатором.

Возвращаемое значение логическое.


## Շարահյուսություն

```vb
ExistsFolder(FolderId)
```
Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| FolderId | Թղթապանակի ներքին համար։ строковое выражение, определяющее идентификатор папки |


## Նկատառումներ

[Տես նաև](../../../functions.html)


## Օրինակ

Փաստաթղթի նկարագրությունից բերված է Delete համակարգային պրոցեդուրայի օրինակ, որտեղ ստուգվում է "Contr." & trim(Doc("CODE")) նույնականացուցիչով թղթապանակի առկայությունը։ 


```vb
Sub Delete()
If ExistsFolder("Contr." & trim(Doc("CODE"))) Then 
   Err.Raise gintUserErrors , "Удаление недопустимо", _
       "По данному договору имеется счет-фактура"
End If
End Sub
```
Из описания документа приведен пример скриптовой процедуры Delete, в котором проверяется существование папки с идентификатором &quot;Contr.&quot; &amp; trim(Doc(&quot;CODE&quot;))

Sub Delete()<br>
If <strong>ExistsFolder</strong>(&quot;Contr.&quot; &amp; trim(Doc(&quot;CODE&quot;))) Then <br>
&nbsp;&nbsp; Err.Raise gintUserErrors , &quot;Удаление недопустимо&quot;, _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;По данному договору имеется счет-фактура&quot;<br>
End If<br>
End Sub <br>

