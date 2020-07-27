---
layout: page
title: "DocFromScreen ֆունկցիա"
---

# DocFromScreen ֆունկցիա

[Հատկություններ և մեթոդներ](../../Asdoc.md)

Էկրանի վրայից վերադարձնում է փաստաթղթի դեռ չպապանված օրինակի հղումը։
Возвращает ссылку на еще несохраненный экземпляр документа с экрана.

## Շարահյուսություն

```vb
Set sDoc = DocFromScreen (nISN)
```

Բաղադրիչներն են՝

    
| Պարամետր | Նկարագրություն |
|--|--|
| sDoc | Էկրանին դեռ չպապանված փաստաթղթի հղումը։ переменная, ссылающаяся на экранный несохраненный документ |
| nISN | Բեռնվող փաստաթղթի ներքին նույնականացման համար։ Եթե տրվում է գոյություն չունեցող ISN, ապա սահմանվում է Nothing։ численное выражение типа Long, определяющее ISN загруженного документа. Если задается несуществующий ISN, то выдается Nothing. |

## նկատառումներ

``DocFromScreen`` ֆունկցիան կատարում է այն նույն գործողությունները ինչը [LoadDoc](LoadDoc.html)։ Տարբերությունը կայանում է նրանում, որ `LoadDoc` վերադարձնում է պահոցում գոյություն ունեցող փաստաթղթի հղումը, իսկ `DocFromScreen` ֆունկցիան վերադարձնում է չպահպանված, դեռ էկրանի վրա գտնվող փաստաթղթի հղումը։ 
Տվյալ ֆունկցիան կիրառվում է հետևյալ դեպքերում՝ օրինակ ստեղծվում է փաստաթուղթ, որը դեռ պահպանված չի, որը պահպանելու ժամանակ ստեղծվում են մի քանի զավակ-փաստաթղթեր։ Ծնող փաստաթղթի հղումը ստեղծվում է `DocFromScreen` ֆունկցիայի միջոցով , որը դեռ գտնվում է էկրանի փաստաթղթի վրա։

Функция ``DocFromScreen`` выполняет то же самое действие, что и [LoadDoc](LoadDoc.html). Отличие их состоит в том, что LoadDoc возвращает ссылку на <u>существующий в базе</u> документ, а функция <strong>DocFromScreen</strong> возвращает ссылку на <u>несохраненный, находящийся еще на экране</u>
документ.
<br/>
Данная функция полезна в следующем случае. Например создается документ, который еще не сохранен и при его сохранении рождаются несколько других документов-потомков. Документы потомки нуждаются в значениях еще несохраненного родительского документа. Ссылка на родительский документ создается с помощью функции <strong>DocFromScreen, </strong>а не [LoadDoc](LoadDoc.html).


[Տես նաև](../../../constructors.html)


## Շարահյուսություն

Օրինակի մեջ կանչվում է `DocFromScreen` ֆունկցիան, xParent-ը հղվում է էկրանի վրա դեռ չպահպանված փաստաթղթի վարա, իր բոլոր հատկություններով և մեթոդներով։ Սկրիպտի մեջից զավակ փաստաթղթի համար օգտագործվում են ծնող փաստաթղթի դաշտերի արժեքները։ 
В примере вызывается функция <strong>DocFromScreen</strong>, xParent ссылается на несохраненный еще экранный документ со всеми его свойствами и методами. Из скрипта для документа потомка используются значения реквизитов родительского документа.

```vb
Sub Folders()
Set xParent = DocFromScreen(Doc.[ParentISN](../../ASDOC/ParentISN.html))
Doc.PutFolder "CREDCHILDS", "O", Doc("CODE"), xParent("NAME"), _
xParent("CODVAL") & xParent("CLICOD")
End Sub
```