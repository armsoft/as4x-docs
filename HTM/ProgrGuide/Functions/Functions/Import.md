---
layout: page
title: "Import ֆունկցիա"
---

# Import ֆունկցիաայլից պարամետրերը 

Ներմուծում է [փաստաթղթեր](../Asdoc.md), [ծառի տարրեր](../AsTreeElement.html) և պարամետրեր AS-4X-ի ներմուծման/արտահանման ձևաչավով ֆայլից։

Ֆունկցիան վերադարձնում է Ներմուծման ընթացքում առաջացած սխալների քանակը, կամ -1, եթե ֆայլը հնարավոր չէ ներմուծել։

## Շարահյուսություն

``` vb
Function Util.Import(ByVal sFileName As String, _
                     ByVal sFailedFileName As String, _
                     ByRef xErrRepViewer As AsRepViewer, _
            Optional ByVal sDocList As String, _
            Optional ByVal sTreeList As String, _
            Optional ByVal sParamList As String) As Long
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sFileName | Սահմանում է այն ֆայլի ճանապարհը, որից կատարվում է ներմուծումը։ |
| sFailedFileName | Սահմանում է այն ֆայլի ճանապարհը, որի մեջ գրանցվում են օբյեկտներ, որոնց ներմուծման ժամանակ առաջացել է սխալ։ |
| xErrRepViewer | [Հաշվետվություն](../AsRepViewer.md) օբյեկտի, որի մեջ ավելանում են ներմուծման ժամանակ առաջացած սխալների մասին հաղորդագրություններ։ |
| sDocList | Փաստաթղթերի տիպերի զտիչ, ստորակետով տարանջատված ցուցակ։ Եթե պարամետրը տրված չէ, ապա ներմուծվում են բոլոր տիպերի փաստաթղթերը։ |
| sTreeList  | Ծառի տեսակների զտիչ, ստորակետով տարանջատված ցուցակ։ Եթե պարամետրը տրված չէ, ապա ներմուծվում են բոլոր տիպի ծառերի տարրերը։ |
| sParamList | Պարամետրերի զտիչ, ստորակետով տարանջատված ցուցակ։ Եթե պարամետրը տրված չէ, ապա ներմուծվում են բոլոր պարամետրերը։ |

## Նկատառումներ 

[Տես նաև](../../functions.html)

## Օրինակ

``` vb
Dim xRepVier As AsRepViewer
Dim ErrCount As Long

ErrCount = Util.Import("C:\12.txt", "C:\errDocs.txt", xRepVier, "MemOrd,Cli")
If ErrCount = -1 Then
    AsMsgBox "Invalid file"
ElseIf ErrCount > 0 Then
    xRepVier.Show
Else
    AsMsgBox "Succeed"
End If
```
