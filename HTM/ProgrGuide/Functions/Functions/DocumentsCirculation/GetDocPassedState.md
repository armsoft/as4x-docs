---
layout: page
title: "GetDocPassedState ֆունկցիա"
---

## GetDocPassedState ֆունկցիա

Ստուգում է և վերադարձնում է փաստաթղթի վերջին կամ առաջին նշանակված վիճակը տրված վիճակների ցուցակից։

## Շարահյուսություն

``` vb
Function GetDocPassedState(ByVal nISN As Long, _
                  Optional ByVal LastState = True, _
                  Optional ByVal InStates As Boolean = True, _
                  Optional ByVal States As Variant) As Integer
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| nISN | Փաստաթղթի ներքին նույնականացման համար։ |
| LastState | `True` արժեքի դեպքում վերադառնում է վերջին վիճակը, հակառակ դեպքում՝ առաջինը։ |
| InStates | `True` արժեքի դեպքում փնտրվում է վիճակ, որը վիճակների ցուցակի միջից է։ Հակառակ դեպքում՝ ցուցակի միջից չէ։ |
| States | Սահմանում է վիճակը կամ վիճակների մասիվ, կամ վիճակները որոշող SQL հարցում։ |

## Օրինակ

``` vb
state = GetDocPassedState(Doc.ISN, , , 8)
state = GetDocPassedState(Doc.ISN, True, True, Array(2,5,8))

If Between(iAgrDocState, 100, 200) AndAlso GetDocPassedState(lAgrISN, True, False, iAgrDocState) > 100 Then
    '''
End If

state = GetDocPassedState(Doc.Isn, True, False, _
                          Array("Select fSTATE From DOCLOG WHERE fISN = " & CStr(Doc.Isn) & " and NOT fSTATE Between 100 and 200"))
```

## Նկատառումներ

[Տես նաև](../../../functions.html)
