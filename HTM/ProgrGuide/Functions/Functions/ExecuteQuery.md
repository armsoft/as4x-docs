---
layout: page
title: "ExecuteQuery ֆունկցիա"
---

# ExecuteQuery ֆունկցիա

> ՀՆԱՑԱԾ։ Հարկավոր է օգտագործել հարցման աշխատացման նոր գործիքները։ Տե՛ս [AsQuery](../AsQuery.md) կամ [dbc.ExecuteNonQuery](AsDbc/ExecuteNonQuery.md), [dbc.ExecuteReader](AsDbc/ExecuteReader.md), [dbc.ExecuteScalar](AsDbc/ExecuteScalar.md), [dbc.OpenDataTable](AsDbc/OpenDataTable.md)։

Կատարում է SQL հարցում և վերադարձնում հարցման կատարման արդյունքը։ 

## Շարահյուսություն

```vb
Function Util.ExecuteQuery(ByVal sSQL As String, _
                           ByVal returnRS As Boolean, _
                  Optional ByVal RSType As Integer = rdOpenForwardOnly, _
                  Optional ByVal RSLockType As Integer = rdConcurReadOnly, _
                  Optional ByVal RSOption As Integer = rdExecDirect, _
                  Optional ByVal QueryTimeout As Variant) As RdoResultset
```

Բաղադրիչներն են՝ 
    
| Պարամետր | Նկարագրություն |
|--|--|
| sSQL | Հարցման տեքստը։ |
| returnRS | Հարցման արդյունքի վերադարձի նշան։ եթե հարցումը վերադարձնում է աղյուսակային տվյալներ, ապա տրվում է `True`, հակառակ դեպքում՝ `False`։ |
| RSType | Վերադարձող արդյունքի նշորդի տիպը։ Լռությամբ ստանում է [ASOpenForwardOnly](../../Constants/const_opencursor_cursortype.md) արժեքը։ |
| RSLockType | Տվյալների արգելափակման տիպը, որը կիրառվում է հարցման կատարման ընթացքում։ Լռությամբ ստանում է [ASConcurReadOnly](../../Constants/const_opencursor_locktype.md) արժեքը։  |
| RSOption | Հարցման կատարման լրացուցիչ պարամետրեր։ Լռությամբ ստանում է [ASExecDirect](../../Constants/const_executequery_options.md) արժեքը։  |
| QueryTimeout | Սահմանում է հարցման կատարման առավելագույն ժամանակահատվածը, որի լրանալուց առաջանում է սխալ։ Չափվում է վայրկյաններով։ Լռությամբ գործում է `QUERYTIMEOUT` պարամետրի արժեքը։ |

## Նկատառումներ

[Տես նաև](../AsQuery.md)

