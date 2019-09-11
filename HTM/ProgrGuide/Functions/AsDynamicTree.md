---
layout: page
title: "AsDynamicTree օբյեկտ"
---

# Դինամիկ ծառ օբյեկտ 


Դինամիկ ծառը ստեղծվում է **CreateDynamicTree** ֆունկցիայի միջոցով։ Այն նախատսված է կամայական տարրերի բազմություն ծառատիպ ցույց տալու համար, ինչպես նաև տվյալների պահոցում առկա ծառի ենթաբազմություն ցույց տալու համար։  


| Հատկություններ | Նկարագրություն|
|--|--|
| [Caption](AsDynamicTree/Caption_D.md) | Վերադարձնում կամ նշանակում է դինամիկ ծառի գլխագիրը։  |
| [CaptionCode](AsDynamicTree/CaptionCode_D.md) | Վերադարձնում է ընտրված հանգույցի անվանումը։  |
| [Code](AsDynamicTree/Code_D.md) | Վերադարձնում կամ նշանակում է ընտրված հանգույցի կոդը։ |
| [ECaption](AsDynamicTree/ECaption_D.md) | Վերադարձնում կամ նշանակում է դինամիկ ծառի գլխագիրը օտար լեզվով։  |
| [FullTree](AsDynamicTree/FullTree_D.md) | Վերադարձնում կամ նշանակում է դինամիկ ծառից ցանկացած հանգույց ընտրելու հայտանիշը։ |
| [isSelected](AsDynamicTree/isSelected_D.md) | Ստուգում է դինամիկ ծառից հանգույցի ընտրված լինելը։ |
| [Left](AsDynamicTree/Left_D.md) |  Վերադարձնում կամ նշանակում է դինամիկ ծառի ձախ եզրի հեռավորությունը ծրագրի պատուհանի ձախ եզրից։ |
| [MultiSelectMode](AsDynamicTree/MultiSelectMode_D.md) | Վերադարձնում կամ նշանակում է դինամիկ ծառից մի քանի հանգույց ընտրելու հնարավորությունը։ |
[SelectRootsOnly](AsDynamicTree/SelectRootsOnly_D.md) | Վերադարձնում կամ նշանակում է դինամիկ ծառից միայն առաջին մակարդակի  հանգույցների  ընտրության հնարավորությունը։ |
| [Top](AsDynamicTree/Top_D.md) | Վերադարձնում կամ նշանակում է դինամիկ ծառի  վերին եզրի հեռավորությունը ծրագրի պատուհանի վերին եզրից։ |
| [TreeId](AsDynamicTree/TreeId_D.md) | վերադարձնում կամ նշանակում է դինամիկ ծառի ներքին անունը։ |
| [xArrayDBNodes](AsDynamicTree/xArrayDBNodes_D.md) | Վերադարձնում է ծառի հանգույցների մասիվը [XArrayDB](Functions/CreateXArrayDB.html) օբյեկտի մեջ։|


| Մեթոդներ | Նկարագրություն |
|--|--|
| [AddNode](AsDynamicTree/AddNode_D.md) | Դինամիկ ծառի մեջ ավելացնում է նոր հանգույց։ |
| [AddNodeFromTree](AsDynamicTree/AddNodeFromTree_D.md) | Դինամիկ ծառի մեջ ավելացնում է տվյալների պահոցում առկա հանգույց իր զավակներով։ |
| [Show](AsDynamicTree/Show_D.md) | Էկրանին է բերում դինամիկ ծառի պատուհանը։ |



## Օրինակ

Ստորև օրինակում `ClickDropDown` իրադարձության ժամանակ, ցույց է տալիս `"DTree1"` ծառի միայն `"D1"` ենթահանգույցը իր զավակներով, ապա ընտրված արժեքը լրացնում է ընթացիկ դաշտի մեջ։

``` vb
Sub ClickDropDown(ByVal Rekv As String, ByVal Top As Single, ByVal Lft As Single)
     Dim dTree As AsDynamicTree

     Set dDTree = CreateDynamicTree("DTree1", Doc) 
     Call ShowDynamicTree(dTree, Top, Lft) 

     If dTree.isSelected Then 
          Doc.ControlValue(Rekv) = dTree.Code
     End If
End Sub
'******************************************************************************** 
' Purpose:  Creates Dynamic Tree 
' Inputs: 
'     key: Defines which tree must be created 
'     source: Source document or Dialog
' Returns: Dynamic tree 
'********************************************************************************
Public Function CreateDynamicTree(ByVal key As String, ByVal source As Object) As AsDynamicTree

     Dim dynTree As AsDynamicTree
     Dim rs As rdoResultset
     Dim sSql As String

     Set dynTree = New AsDynamicTree 

     Select Case key
     Case "DTree1"
          dynTree.Caption = "DynCAption" 
          dynTree.ECaption = "DynECaption"
          dynTree.TreeId = "TreeID1" 
          dynTree.AddNodeFromTree("D1") 
     End Select 

     Return dynTree
End Function

Public Sub ShowDynamicTree(ByVal dnTree As AsDynamicTree, _
                         ByVal Top As Single, _
                         ByVal Lft As Single, _
                         Optional ByVal IsFullTree As Boolean = False, _ 
                         Optional ByVal LookUpValue As String = "", _
                         Optional ByVal MultiSelectMode As Boolean = False) 

     dnTree.Left = Lft 
     dnTree.Top = Top 
     dnTree.FullTree = IsFullTree 
     dnTree.MultiSelectMode = MultiSelectMode 
     If LookUpValue <> "" Then 
          dnTree.Code = LookUpValue 
     End If 
     dnTree.Show 

End Sub

 
```