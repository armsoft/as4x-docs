---
layout: page
title: "CreateDoc"
---

# CreateDoc ֆունկցիա
[Ֆունկցիաներ, հատկություններ](../../Asdoc.md)

Նշված տիպի նոր փաստաթղտի ստեղծում։
   

## Շարահյուսություն

``` vb
Set sNewDoc = CreateDoc(sDocType, [nParentISN]) 
```

Բաղադրիչներն են՝
    
| Պարամետր | Նկարագրություն |
|--|--|
| sNewDoc | Փաստաթուղթ տիպի փոփոխական |
| sDocType | Փաստաթղտի տիպը որոշող տողային արտահայտություն |
| nParentISN | Ոչ պարտադիր թվային արտահայտություն Long տիպի, որը որոշում է ծնող փաստաթղտին ISN-ով, լռությամբ արժեքը -1 |


## Նկատառումներ

[См. также](../../../constructors.html)

## CreateDoc ֆունկցիայի օրինակներ

Օրինակում կանչվում է CreateDoc ֆունկցիան, xDoc-ը հղվում է փաստաթուղտ տիպի օբյեկտի վրա, փաստաթղտի բոլոր ֆունկցիաներով և մեթոդներով։
 Ստեղծվում է HTN92 տիպի փաստաթղտի նոր օրինակ։

``` vb
Set mDoc = LoadDoc(CurrentView.Value("fISN"))
Set xDoc = CreateDoc("HTN92", mDoc.ISN)
xDoc("CATEGORY") = xMsgType
xDoc("BMDOCNUM") = nDoc.ISN
xDoc("REFERENC") = mDoc("BMDOCNUM")
xDoc("DATE") = mDoc("BMIODATE")
xDoc("TYPE") = xMsgType
xDoc.State = 0
xDoc.Show
```
