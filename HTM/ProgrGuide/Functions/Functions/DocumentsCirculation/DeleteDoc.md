---
layout: page
title: "DeleteDoc ֆունկցիա"
---

# DeleteDoc ֆունկցիա

Ջնջում է փաստաթուղթը համակարգից։  
Ջնջվող փաստաթղթերի համար առաջանում է [Delete](../../../ScriptProcs/Delete.md) իրադարձությունը, ապա փաստաթղթի վիճակը դառնում է 999, որից հետո այդ փաստաթուղթը հայտնվում է ջնջված փաստաթղթերի թղթապանակում։
Ջնջման ժամանակ հեռացվում են նաև այդ փաստաթղթի բոլոր թղթապանակները, ծառի տարրերը և իր համար գրանցված հաշվառումները։

Եթե փաստաթուղթը ունի ենթափաստաթղթեր, ապա ջնջումը թույլատրելի չի լինի։

Ջնջումը տեղի է ունենում տրանզակցիայի մեջ։

Ֆունկցիան վերադարձնում է `True` եթե ջնջումը հաջողվում է, `False`՝ հակառակ դեպքում։

## Շարահյուսություն

``` vb
Function DeleteDoc(ByVal IsnOrDoc As Variant, _
                   ByVal AllowUserInterface As Boolean, _
          Optional ByVal FullDelete As Boolean = False, _
          Optional ByVal Comment As String = "", _
          Optional ByVal CallDelete As Boolean = True, _
          Optional ByVal InheritedDelete As Boolean = False) As Boolean
```
    
| Պարամետր | Նկարագրություն |
|--|--|
| IsnOrDoc | Ջնջվող փաստաթղթի ներքին նույնականացման համարը, կամ փաստաթղթի հղումը։ |
| AllowUserInterface | `True` արժեքը ցույց է տալիս, որ ջնջումը կատարվում է ինտերֆեսյից, այդ դեպքում, եթե առկա է, աշխատացնում է [OnUIDelete](../../../ScriptProcs/OnUIDelete.md) իրադարձությունը, ապա ցույց է տրվում ջնջման մեկնաբանություն պահանջող երկխոսության պատուհանը։ |
| FullDelete | Փաստաթղթի վերջնական ջնջման հայտանիշ։ Վերջնական ջնջման ժամանակ փաստաթուղթը ջնջվում է բոլոր միջուկային աղյուսակներից՝ [DOCP](../../../Database/DocP.html), [FOLDERS](../../../Database/Folders.html), [TREES](../../../Database/Trees.html), [HIPAR](../../../Database/HiPar.html), [HIREST](../../../Database/Hirest.html), [HIREST2](../../../Database/Hirest2.html), [ACCESS](../../../Database/Access.html), [HI](../../../Database/Hi.html) և [HI2](../../../Database/Hi2.html)։ Ոչ վերջնական ջնջման ժամանակ փաստաթուղթը մնում է [DOCS](../../../Database/Docs.html), [DOCLOG](../../../Database/DocLog.html), [DOCSG](../../../Database/DocsG.html), [DOCSIM](../../../Database/Docsim.html) աղյուսակների մեջ և փաստաթղթի վիճակը դառնում է 999: Լռությամբ արժեքը `False` է։ |
| Comment | Փաստաթղթի ջնջման մեկնաբանություն, որը գրանցվում է [փաստաթղթի պատմության](../../../Database/DocLog.html) մեջ։ |
| CallDelete | Փաստաթղթի [Delete](../../../ScriptProcs/Delete.md) իրադարձության կանչի հայտանիշ։ `False` արժեքի դեպքում [Delete](../../../ScriptProcs/Delete.md) իրադարձության փոխարեն կանչվում է [OnRefuseDoc](../../../ScriptProcs/OnRefuseDoc.md) իրադարձությունը։ Լռությամբ արժեքը `True` է։  |
| InheritedDelete | `True` արժեքի դեպքում [փաստաթղթի պատմության](../../../Database/DocLog.html) մեջ գրվում է, որ փաստաթուղթը ջնջվել է այլ փաստաթղթի ջնջման ընթացքում։ Տվյալների պահոցում ջնջման կոդը լինում է `H`։ |

## Նկատառումներ

[տես նաև](LoadDoc.html)

## Օրինակ
1. Փաստաթուղթը ջնջվում է առանց երկխոսության պատուհանի ցուցադրման։

``` vb
isdel = DeleteDoc(xDoc.ISN, False)
```

2. docDel-ի ջնջման դեպքում կգրվի՝  
(Հայերեն) Հեռացման հիմք փաստաթուղթ` 123654789  
(Անգլերեն) Deletion Base Document: 123654789  

``` vb
DeleteDoc(docDel, False, , "123654789", , True)
```
