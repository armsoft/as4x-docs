---
layout: page
title: "AsDynamicTree/AddNodeFromTree"
---


# AddNodeFromTree մեթոդ

[См. также](../AsDynamicTree.md) Օրինակ [Применяется к](../AsDynamicTree.md)

Դինամիկ ծառի մեջ ավելացնում է տվյալների պահոցում առկա հանգույց իր զավակներով։

## Շարահյուսություն

``` vb
object.AddNodeFromTree sNameNode, [bAddChildAlso]
```

Բաղադրիչներն են՝

    
| Պարամետր | Նկարագրություն |
|--|--|
| object | Դինամիկ ծառի հղում։ |
| sNameNode| Ավելացվող հանգույցի կոդ։ |
| bAddChildAlso | Ավելացնել `sNameNode` հանգույցի զավակները։ Լռությամբ արժեքը True, որի ժամանակ ավելացվող հանգույցի հետ միասին ավելանում են նաև զավակ հանգույցները, հակառակ դեպում ավելանում է միայն հանգույցը։ |

