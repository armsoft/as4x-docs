---
layout: page
title: "Объект отчет"
---



Создание нового отчета в системе обеспечивается 
через функцию [CreateRepViewer](Functions/CreateRepViewer.html).

|Свойства|Описание|
|--|--|
|<a href="AsRepViewer/AllowHistory.html">AllowHistory</a>|Возвращает или устанавливает разрешение на просмотр журнала Log документа из отчета.|
|<a href="AsRepViewer/AllowPrintPreview.html">AllowPrintPreview</a>|Возвращает или устанавливает разрешение на просмотр печатной формы документа из отчета.|
|<a href="AsRepViewer/AllowView.html">AllowView</a>|Возвращает или устанавливает разрешение на просмотр документа из отчета.|
|<a href="AsRepViewer/AllowViewDocChildren.html">AllowViewDocChildren</a>|Возвращает или устанавливает разрешение на просмотр дочерних документов из отчета.|
|<a href="AsRepViewer/AllowViewDocParents.html">AllowViewDocParents</a>|Возвращает или устанавливает разрешение на просмотр родительских документов из отчета.|
|<a href="AsRepViewer/Caption.html">Caption</a>|Возвращает или устанавливает заголовок отчета (справки).|
|<a href="AsRepViewer/CaptionSpreadsheetExportStyle.html"><font>CaptionSpreadsheetExportStyle</font></a>|Возвращает или устанавливает имя стиля экспорта загаловочной строки в Excel.|
|<a href="AsRepViewer/Caption.html">E<font>Caption</font></a>|Возвращает или устанавливает заголовок отчета (справки) на иностранном языке.|
|<a href="AsRepViewer/DisableDocFunctions.html">DisableDocFunctions</a>|Устанавливает или снимает запрет на использование функций документа из отчета.|
|<a href="AsRepViewer/DocBased.html">DocBased</a>|Возвращает или устанавливает признак oснованности отчета на документах.|
|<a href="AsRepViewer/ExportType.html">ExportType</a>|Возвращает или устанавливает тип кодировки файла для экспортируемой справки.|
|<a href="AsRepViewer/FootCount.html">FootCount</a>|Возвращает количество строк итогов (сносок) отчета.|
|<a href="AsRepViewer/Footer.html"><font>Footer</font></a>|Возвращает строку итогов (сносок) по индексу.|
|<a href="AsRepViewer/FragCount.html">FragCount</a>|Возвращает количество фрагментов в справке.|
|<a href="AsRepViewer/FragLength.html">FragLength</a>|Возвращает длину заданного фрагмента справки.|
|<a href="AsRepViewer/GetRows.html">GetRows</a>|Возвращает массив строк из справки, начиная с указанной строки с указанным количеством.|
|<a href="AsRepViewer/HasDefinedStyle.html"><font>HasDefinedStyle</font></a>|Возвращает признак задания стиля экспорта строк справки в Excel.|
|<a href="AsRepViewer/HeadCount.html"><font>HeadCount</font></a>|Возвращает количество строк заголовков отчета.|
|<a href="AsRepViewer/Header.html">Header</a>|Возвращает указанную строку заголовка отчета.|
|<a href="AsRepViewer/InitialWidthInChars.html">InitialWidthInChars</a>|Возвращает или станавливает ширину окна в символах при начальном показе.|
|<a href="AsRepViewer/MaxLength.html">MaxLength</a>|Возвращает сумму длин всех фрагментов справки.|
|<a href="AsRepViewer/PrintStyle.html">PrintStyle</a>|Возвращает или устанавливает стиль печати для отчета.|
|<a href="AsRepViewer/ReportId.html"><font>ReportId</font></a>|Возвращает идентификатор отчета.|
|<a href="AsRepViewer/RowCount.html">RowCount</a>|Возвращает количество строк в справке.|
|<a href="AsRepViewer/RowDescriptor.html">RowDescriptor</a>|Возвращает описатель данной строки.|
|<a href="AsRepViewer/RowISN.html">RowISN</a>|Возвращает внутрисистемный уникальный идентификатор ISN для данной строки.|
|<a href="AsRepViewer/UnMoveFragment.html">UnMoveFragment</a>|Возвращает или устанавливает наличие неподвижного фрагмента.|
|<a href="AsRepViewer/UnMoveHeadCount.html">UnMoveHeadCount</a>|Возвращает или устанавливает количество неперемещаемых заголовков.|
|<a href="AsRepViewer/UseFormatting.html">UseFormatting</a>|Возвращает или устанавливает признак использования форматирования текста в отчете.|








|Методы|Описание|
|--|--|
|<a href="AsRepViewer/AddExportStyle.html"><font>AddExportStyle</font></a>|Добавляет имя стиля экспорта данных строки в Excel.|
|<a href="AsRepViewer/AddFooter.html"><font>AddFooter</font></a>|Добавляет в справке новую строку итогов.|
|<a href="AsRepViewer/AddFragment.html">AddFragment</a>|Добавляет в справке новый фрагмент заданной ширины.|
|<a href="AsRepViewer/AddHeader.html">AddHeader</a>|Добавляет в данной справке новую строку неподвижного заголовка.|
|<a href="AsRepViewer/AddRow.html">AddRow</a>|Добавляет в данной справке новую строку.|
|<a href="AsRepViewer/Break.html">Break</a>|В текущей строке справки вставляет символ прогона страницы.|
|<a href="AsRepViewer/LoadFrom.html">LoadFrom</a>|Загружает описание и из тела отчета создает обьект отчет.|
|<a href="AsRepViewer/RegistrFunction.html">RegistrFunction</a>|Добавляет в контекстное меню вызов пользовательской функции.|
|<a href="AsRepViewer/RegistrNode.html">RegistrNode</a>|Добавляет группировочный узел в подменю вызовов пользовательских функций.|
|<a href="AsRepViewer/SaveAs.html">SaveAs</a>|Запоминает описание и тело отчета в файл.|
|<a href="AsRepViewer/SaveToFile.html">SaveToFile</a>|Сохраняет отчет в файле.|
|<a href="AsRepViewer/Show.html">Show</a>|Выводит подготовленную справку на экран.|





