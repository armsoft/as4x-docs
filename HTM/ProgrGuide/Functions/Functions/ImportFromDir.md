---
layout: page
title: ImportFromDir մեթոդ
---

# ImportFromDir մեթոդ

Ներմուծում է [փաստաթղթեր](../Asdoc.md), [ծառի տարրեր](../AsTreeElement.html) և պարամետրեր AS-4X-ի ներմուծման/արտահանման ձևաչավով ֆայլերից նշված թղթապանակից։

## Շարահյուսություն

``` vb
Sub Util.ImportFromDir(ByVal sFolderName As String, _
                       ByVal sMoveToFolderName As String, _
                       ByVal sErrDocsFolder As String, _
                       ByVal sLogFileName As String, _
              Optional ByVal sFileMask As String = "*.txt", _
              Optional ByRef nErrCount As Long, _
              Optional ByRef nFileCount As Long, _
              Optional ByVal sDocList As String, _
              Optional ByVal sTreeList As String, _
              Optional ByVal sParamList As String)

Util.ImportFromDir sFolderName, sMoveToFolderName, sErrDocsFolder, sLogFileName, [sFileMask], [nErrCount],  [nFileCount],[sDocList], [sTreeList], [sParamList]
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| sFolderName | Թղթապանակի ճանապարհը, որից կատարվում է ներմուծումը։ |
| sMoveToFolderName | Թղթապանակի ճանապարհը, որտեղ տեղափոխվում են ներմուծված ֆայլերը։ |
| sErrDocsFolder | Թղթապանակի ճանապարհը, որտեղ գրանցված են ֆայլերը, որոնցում գրանցվում են օբյեկտներ, որոնց ներմուման ժամանակ առաջացել է սխալ։ |
| sLogFileName | Լոգ ֆայլի ճանապարհը։ |
| sFileMask | Ներմուծվող ֆայլերի զտիչ։ |
| nErrCount | Վերադարձնում է առաջացած սխալների քանակը։ |
| nFileCount | Վերադարձնում է դիտարկված ֆայլերի քանակը։ |
| sDocList | Փաստաթղթերի տիպերի զտիչ, ստորակետով տարանջատված ցուցակ։ Եթե պարամետրը տրված չէ, ապա ներմուծվում են բոլոր տիպերի փաստաթղթերը։ |
| sTreeList  | Ծառի տեսակների զտիչ, ստորակետով տարանջատված ցուցակ։ Եթե պարամետրը տրված չէ, ապա ներմուծվում են բոլոր տիպի ծառերի տարրերը։ |
| sParamList | Պարամետրերի զտիչ, ստորակետով տարանջատված ցուցակ։ Եթե պարամետրը տրված չէ, ապա ներմուծվում են բոլոր պարամետրերը։ |

## Նկատառումներ

[Տես նաև](Import.md)

## Օրինակ

``` vb
Dim ErrCount As Long, FileCount as Long

Util.ImportFromDir("C:\ImpFold", "C:\InFold", "C:\ErrFold", "C:\log.txt", "*.as", ErrCount, FileCount, "MemOrd,Cli")
If ErrCount > 0 Then
    AsMsgBox "Imported with errors."
Else
    AsMsgBox "Succeed"
End If
```
