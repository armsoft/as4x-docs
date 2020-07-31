---
layout: page
title: "DeleteDescr ֆունկցիա"
---

# DeleteDescr ֆունկցիա

[SYSDEF](../../../Database/SysDef.html) աղյուսակից ջնջում է [համակարգային նկարագրությունը](../../../Defs.md)։ 

## Շարահյուսություն

``` vb
Sub Util.DeleteDescr(ByVal nSysType As Integer, ByVal sDefID As String)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| nSysType | [Համակարգային նկարագրություն տիպի կոդ](../../../Database/SysDef.html)։ Որի արժեքները նման են SYSDEF աղյուսակի fSYSTYPE դաշտի թույլատրելի արժեքներին, բացի 5 արժեքից (ԱՇՏ), որը ջնջվում է ինտերակտիվ կերպով։ |
| sDefID | Ջնջվող նկարագրության ներքին անուն։ |

## Նկատառումներ

[Տես նաև](../../../functions.html)
