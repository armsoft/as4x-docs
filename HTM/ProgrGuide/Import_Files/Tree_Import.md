---
layout: page
title: "Import Files/Tree"
---

# Ծառ-տեղեկատուի ներմուծվող տեքստային ֆայլերի նկարագրություն  


[См. также](../Import_Files.md) Օրինակ [Применяется к](../Import_Files.md) 

Ներմուծվող ֆայլի միջոցով կարելի է ներմուծել ծառ-տեղեկատուի հանգույցներ, երբ նկարագրությունը առկա է համակարգում։

## Շարահյուսություն

```
#AS3XX# EXPORT-IMPORT DATA FILE

TREENODE 
TREEID:treeId1
CODE:treeCode1
NAME:treeName1
ENAME:treeEName1
PARENT:treeParent
}

TREENODE 
TREEID:treeId2
CODE:treeCode2
NAME:treeName2
ENAME:treeEName2
PARENT:treeParent2
}
```

| Արժեքներ | Նկարագրություն |
|--|--|
| treeId | Ծառ-տեղեկատուի ներքին անուն։ Առավելագույն երկարությունը ոչ ավել քան 8 նիշ։ |
| treeCode | Հանգույցի կոդ։ Առավելագույն երկարությունը ոչ ավել քան 20 նիշ։ |
| treeName | Հանգույցի անվանում։ |
| treeEName |  Հանգույցի անվանում օտար լեզվով: |
| treeParent |  Ներմուծվող հանգույցի ծնողի կոդը, եթե ավելացվող հանգույցը համարվում է ծառ-տեղեկատուի տերև։ Ոչ պարտադիր։ |
