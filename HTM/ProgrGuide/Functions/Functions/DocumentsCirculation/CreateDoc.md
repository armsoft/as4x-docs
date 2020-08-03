---
layout: page
title: "CreateDoc ֆունկցիա"
---

# CreateDoc ֆունկցիա
[Ֆունկցիաներ, հատկություններ](../../Asdoc.md)

Ստեղծում է Նշված տիպի նոր փաստաթղթի օբյեկտ։

## Շարահյուսություն

``` vb
Function CreateDoc(ByVal sDocType As String, _
          Optional ByVal nParentISN As Variant = -1, _
          Optional ByVal IncrementISN As Boolean = True) As AsDoc
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sDocType | [Փաստաթղթի ներքին անուն](../../../Defs/doc.md)։ |
| nParentISN | Ստեղծվող փաստաթղթի ծնող փաստաթղթի ISN։ Տրված չլինելու դեպքում փաստաթուղթը ստեղծվում է առանց ծնողի։ |
| IncrementISN | ՀՆԱՑԱԾ։ Պետք չէ օգտագործել։ |

## Նկատառումներ

[См. также](../../../constructors.html)

## Oրինակներ

Օրինակում կանչվում է CreateDoc ֆունկցիան, xDoc-ը հղվում է փաստաթուղթ տիպի օբյեկտի վրա, փաստաթղթի բոլոր ֆունկցիաներով և մեթոդներով։  
Ստեղծվում է HTN92 տիպի փաստաթղթի նոր օրինակ։

``` vb
Set mDoc = LoadDoc(CurrentView.Value("fISN"))
Set xDoc = CreateDoc("HTN92", mDoc.ISN)
xDoc("CATEGORY") = xMsgType
xDoc("BMDOCNUM") = nDoc.ISN
xDoc("REFERENC") = mDoc("BMDOCNUM")
xDoc("DATE") = mDoc("BMIODATE")
xDoc("TYPE") = xMsgType
xDoc.State = 0
xDoc.Show()
```
