---
layout: page
title: "ApplyDialogExtension ֆունկցիա"
---
    
# ApplyDialogExtension ֆունկցիա

Երկխոսության պատուհանի մեջ ավելացնում է ընդլայնումները։

Ընդլայնումներն են՝
* «Դիտելու ձև» - երկխոսության պատուհանից հետո ցուցադրվող դիտելու ձևի ընտրության դաշտ,
* «Լրացնել» - Ցուցադրման եղանակ՝ թղթապանակի մեջ, Excel, Excel Pivot,
* Երկխոսության պատուհանի ընդլայնված դաշտեր։

## Շարահյուսություն

``` vb
Sub ApplyDialogExtension(ByVal xDlg As AsDialog, _
                         ByVal groupsView As String, _
                         ByVal defaultViewName As String, _
                Optional ByVal viewNameFilter As String = "", _
                Optional ByVal disableExcelExport As Boolean = False)
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| xDlg | Երկխոսության պատուհանի օբյեկտի հղում։ |
| groupsView | Դիտելու ձևի խումբը կամ ստորակետով տարանջատված խմբերի ցանկը։ |
| defaultViewName | Առաջարկվող դիտելու ձևը պատուհանում ցույց տալու համար։ Եթե դիտելու ձևը տրված չի երկխոսության պատուհանի մեջ, ապա կօգտագործվի է համակարգային դիտելու ձև։ |
| viewNameFilter | Դիտելու ձի անվան ֆիլտր։ |
| disableExcelExport | `True` արժեքի դեպքում ցույց չի տալիս «Լրացնել» դաշտը։ |

## Կարգավորումներ

«Լրացնել» ծառը ունի հետևյալ արժեքները։

| Արժեք | Նկարագրություն |
|--|--|
| `0` | Հայցվող տվյալները լրացվում են թղթապանակի մեջ։ |
| `1` | Հայցվող տվյալները լրացվում են MS Excel-ի մեջ։ |
| `2` | Հայցվող տվյալները լրացվում են MS Excel-ի մեջ կիրառելով PivotTable-ի գործիքները։  |

## Օրինակ

Եթե `GroupView` խմբում առկա են `View10`, `View11`, `View21`, `View22`, ապա դիտելու ձևերի ցուցակում կերևան `View10` լռությամբ արժեքը, և ֆիլտրով որոշվող `View21`, `View22` արժեքները։

``` vb
Dim xDialog As AsDialog
Set xDialog = CreateDialog("ViewDialog")
With xDialog
    .Caption = "Group View"
    .ECaption = "Group View"
    .EventModule = "ViewMod"
    .AddControl "StartDate", #Period, "DATE", , , #e_Period, 0
    .AddDublCntrl "EndDate", "StartDate", , , 0
    .LeftDouble = 1500 End With
    ApplyDialogExtension xDialog, "GroupView", "View10", "View2%"

    .Show
    If .Cancel Then
        Exit Sub
    End If
End If
```

Տես նաև դիտելու ձևի ցույց տալու [3-րդ օրինակը](../../../Examples/E_AsView.md)։

## նկատառումներ
   
[Տես նաև](../../../functions.html)
