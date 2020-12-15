---
layout: page
title: "AppLock ֆունկցիա"
---

[msdn sp_getapplock]: https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sp-getapplock-transact-sql

# AppLock ֆունկցիա

Ստեղծում է SQL արգելափակում (lock) տրված անունով ռոսուրսի վրա։  
Եթե արգելափակումը չի ստացվում ստեղծել, ապա առաջանում է սխալ։ 

Նախատեսված է զուգահեռ նույն ռեսուրսի հետ աշխատանքը սահմանափակելու համար։

Արգելափակման համար օգտագործվում է [sp_getapplock][msdn sp_getapplock] պրոցեդուրան։

## Շարահյուսություն

``` vb
Public Sub AppLock(ByVal Resource As String, _
          Optional ByVal ErrorMsq As String, _
          Optional ByVal Mode As String = "Exclusive", _
          Optional ByVal Owner As String = "Transaction", _
          Optional ByVal Timeout As Long = 0, _
          Optional ByVal DbPrincipal As String = "public")
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| Resource | Ռեսուրսի ներքին անուն՝ [տե՛ս @Resource][msdn sp_getapplock]։ |
| ErrorMsq | Արգելափակման տեղադրում չստացվելու դեպքում առաջացող սխալի տեքստը։ Եթե պարամետրի արժեքը դատարկ տող է, ապա առաջանում է ստանդարտ տեքստով սխալ։ |
| Mode | Արգելափակման տեղադրման եղանակ՝ [տե՛ս @LockMode][msdn sp_getapplock]։ |
| Owner | Արգելափակման տեղադրման սեփականատեր՝ [տե՛ս @LockOwner][msdn sp_getapplock]։ |
| Timeout | Արգելափակման տեղադրման փոձի առավելագույն ժամանակ՝ [տե՛ս @LockTimeout][msdn sp_getapplock]։ |
| DbPrincipal | Տվյալների պահոցում իրավասություն ունեցող կողմ՝ [տե՛ս @DbPrincipal][msdn sp_getapplock]։ |

## Նկատառումներ

[Տես նաև](../../functions.html)
