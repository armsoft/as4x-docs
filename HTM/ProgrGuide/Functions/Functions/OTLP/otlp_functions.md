---
layout: page
title: Թրեյսերի ու մետրիկաների հետ աշխատանքի համար անհրաժեշտ ֆունկցիաներ
tags: [trace, metric, OTLP]
---

## Ներածություն

Այս բաժնում նկարագրված մեթոդները նախատեսված են մետրիկաների ու թրեյսերի հետ աշխատանքի համար։

## Ֆունկցիաներ

| Ֆունկցիա | Նկարագրություն |
|----------|---------------|
| [AddHistogram](AddHistogram.md) | Ստեղծում է նոր հիստոգրամ, որի արժեքը անհրաժեշտ է լրացնել [RecordHistogram](RecordHistogram.md) մեթոդի միջոցով։ |
| [AddNumericCounter](AddNumericCounter.md) | Ստեղծում է թվային counter, որի արժեքը կարող է միայն աճել։ |
| [AddNumericUpDownCounter](AddNumericUpDownCounter.md) | Ստեղծում է թվային counter, որի արժեքը կարող է աճել կամ նվազել։ |
| [DecrementNumericUpDownCounter](DecrementNumericUpDownCounter.md) | Նվազեցնում է [AddNumericUpDownCounter](AddNumericUpDownCounter.md) -ով ստեղծված counter-ի արժեքը։ |
| [IncrementNumericCounter](IncrementNumericCounter.md) | Ավելացնում է [AddNumericCounter](AddNumericCounter.md)-ով ստեղծված counter-ի արժեքը։ |
| [IncrementNumericUpDownCounter](IncrementNumericUpDownCounter.md) | Ավելացնում է [AddNumericUpDownCounter](AddNumericUpDownCounter.md) -ով ստեղծված counter-ի արժեքը։ |
| [SetTagInLast](SetTagInLast.md) | Վերջին [բացված թրեյսին](StartActivity.md) ավելացնում է նշված tag-ը և նրա արժեքը։ |
| [StartActivity](StartActivity.md) | Բացում է թրեյս և վերադարձնում բացված թրեյսի id-ն։ |
| [StopActivity](StopActivity.md) | Փակում է [նախապես բացված](StartActivity.md) թրեյսը ըստ id-ի: |
| [RecordHistogram](RecordHistogram.md) | Գրանցում է հիստոգրամի արժեքը և փակում այն։ |
