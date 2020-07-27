---
layout: page
title: "CreateDoc ֆունկցիա"
---

# CreateDoc ֆունկցիա
[Ֆունկցիաներ, հատկություններ](../../Asdoc.md)

Նշված տիպի նոր փաստաթղթի ստեղծում։

## Շարահյուսություն

``` vb
Set sNewDoc = CreateDoc(sDocType, [nParentISN]) 
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sNewDoc | Ստեղծված փաստաթղթի հղում։ |
| sDocType | [Փաստաթղթի ներքին անուն](../../../Defs/doc.md)։ |
| nParentISN | Ոչ պարտադիր թվային արտահայտություն Long տիպի, որը որոշում է ծնող փաստաթղթին ISN-ով, լռությամբ արժեքը -1։ |

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
