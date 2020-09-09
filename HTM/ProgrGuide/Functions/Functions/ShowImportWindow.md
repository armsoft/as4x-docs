---
layout: page
title: "ShowImportWindow ֆունկցիա"
---

# ShowImportWindow ֆունկցիա

Ակտիվացնում է փաստաթղթերի ներմուծման պատուհանը։ 

Եթե նշված տիպերի ցանկը դատարկ է, ապա ներմուծվում են բոլոր փաստաթղթերը։

## Շարահյուսություն

``` vb
Sub Util.ShowImportWindow(Optional ByVal sDocList As String, _
                            Optional ByVal sTreeList As String, _
                            Optional ByVal sParamList As String)
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| sDocList | Փաստաթղթերի տիպերի զտիչ, ստորակետով տարանջատված ցուցակ։ Եթե պարամետրը տրված չէ, ապա ներմուծվում են բոլոր տիպերի փաստաթղթերը։ |
| sTreeList  | Ծառի տեսակների զտիչ, ստորակետով տարանջատված ցուցակ։ Եթե պարամետրը տրված չէ, ապա ներմուծվում են բոլոր տիպի ծառերի տարրերը։ |
| sParamList | Պարամետրերի զտիչ, ստորակետով տարանջատված ցուցակ։ Եթե պարամետրը տրված չէ, ապա ներմուծվում են բոլոր պարամետրերը։ |

## Նկատառումներ

[Տես նաև](../../functions.html)

## Օրինակ

``` vb
Util.ShowImportWindow("MemOrd,ConvOrd", "KASSA,IncExp","BANKWEBPORT,BANKWEBURL")
```
