"use client";
import * as XLSX from "xlsx";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";

const XLSdata: any = [];

export function clickXLSButton() {
  const dataFromInputs: Array<string> = [];
  const QRCodeLength: HTMLInputElement | null = document.querySelector(".qr-code-length");
  const howManyQRCodes: HTMLInputElement | null = document.querySelector(".how-many-qr-codes");
  const startValue: HTMLInputElement | null = document.querySelector(".start-value");
  const prefix: HTMLInputElement | null = document.querySelector(".prefix");
  const suffix: HTMLInputElement | null = document.querySelector(".suffix");
  const selectPaperSize: HTMLInputElement | null = document.querySelector(".selectPaperSize");

  dataFromInputs.splice(0, dataFromInputs.length);
  animationXLSButton();

  howManyQRCodes ? dataFromInputs.push(howManyQRCodes.value) : null;
  QRCodeLength ? dataFromInputs.push(QRCodeLength.value) : null;
  startValue ? dataFromInputs.push(startValue.value) : null;
  prefix ? dataFromInputs.push(prefix.value) : null;
  suffix ? dataFromInputs.push(suffix.value) : null;
  selectPaperSize ? dataFromInputs.push(selectPaperSize.value) : null;

  const data = clickXLSButtonArray(dataFromInputs);

  if (data) {
    setTimeout(exportToExcel(data), 1000);
    // const PDFButton: HTMLButtonElement | null = document.querySelector(".create_button");
    // PDFButton ? PDFButton.setAttribute("disabled", "false") : "";
    // PDFButton ? PDFButton.removeAttribute("title") : "";
  }
}

export function getMoreSettings() {
  const settingsBlock: any = document.querySelector(".settings_block");
  settingsBlock.classList.contains("height170")
    ? settingsBlock.classList.remove("height170")
    : settingsBlock.classList.add("height170");
}

export function clickPDFButton() {
  let PDFButton: HTMLButtonElement | null = document.querySelector(".create_button");
  if (PDFButton) PDFButton.classList.add("click01");
  setTimeout(() => {
    if (PDFButton) PDFButton.classList.remove("click01");
  }, 100);

  setTimeout(() => {
    if (XLSdata.length > 0) {
      createPDFWithQRCodes(XLSdata);
    } else {
      alert(`To the first create 'data.xlsx'`);
    }
  }, 500);
}

function animationXLSButton() {
  const XLSButton: HTMLButtonElement | null = document.querySelector(".create_XLS_button");
  if (XLSButton) XLSButton.classList.add("click01");
  setTimeout(() => {
    if (XLSButton) XLSButton.classList.remove("click01");
  }, 100);
}

// async function createQRCode(value: string) {
//   const qrCodeDataURL: string = await QRCode.toDataURL(value);
//   return qrCodeDataURL;
// }

async function createPDFWithQRCodes(values: any) {
  const pdfDoc = await PDFDocument.create();

  let page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const fontSize = 5;
  // const textHeight = fontSize;

  // Определение начальной позиции для текста и QR-кода
  let y = height - 134;
  let x = 8;

  // Добавление QR-кодов и значений в PDF
  for (const value of values) {
    if (y < 0) {
      page = pdfDoc.addPage();
      y = height - 134;
      x = 8;
    }

    const qrCodeData: any = await QRCode.toDataURL(value);

    // Добавление QR-кода
    const qrCodeImage = await pdfDoc.embedPng(qrCodeData);

    page.drawImage(qrCodeImage, {
      x: x,
      y: y,
      width: 120,
      height: 120,
    });

    let lastSymbols = value;

    if (value.length > 34) {
      lastSymbols =
        "~ " +
        value
          .split("")
          .splice(value.length - 32, value.length)
          .join("");
    }

    // Добавление значения

    page.drawText(lastSymbols, {
      x: x + 60 - lastSymbols.split("").length * 1.38, // Добавление отступа между QR-кодом и значением
      y: y + 7, // Корректировка координаты y для близкого расположения QR-кодов
      size: fontSize,
      color: rgb(0, 0, 0),
    });

    // Изменение координаты Y для следующего элемента
    if (x + 235 >= width) {
      y -= 115;
      x = 8;
    } else {
      x += 115;
    }
  }

  // Сохранение PDF в виде ArrayBuffer
  const pdfBytes = await pdfDoc.save();

  // Создание Blob из ArrayBuffer
  const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

  // Открытие диалогового окна для сохранения файла
  const url = window.URL.createObjectURL(pdfBlob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "QRs.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  //   window.URL.revokeObjectURL(url);

  // const PDFButton: HTMLButtonElement | null = document.querySelector(".create_button");
  // PDFButton ? PDFButton.setAttribute("title", "Create XML to th first") : "";
  // PDFButton ? PDFButton.setAttribute("disabled", "") : "";
}

function exportToExcel(data: any): any {
  // закладываем каждый элемент в массив для обработки
  const dataArray = data.map((el: any) => [el]);
  // создаём новую книгу
  const workbook = XLSX.utils.book_new();
  // закладываем туда значения из нашего массива
  const worksheet = XLSX.utils.aoa_to_sheet(dataArray);
  // добавляем эту книгу в файл
  XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
  // создаём файл через ссылку и blob
  const buffer = XLSX.write(workbook, { type: "array" });
  const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  const saveBlob = function (blob: any, fileName: any) {
    const navigator: any = window.navigator;
    if (navigator && navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }
  };
  saveBlob(blob, "data.xlsx");
}

function clickXLSButtonArray(dataFromInputs: any) {
  // стираем стили, если они были после ошибки
  //   if (QRCodeLength) QRCodeLength.classList.remove("error-value");
  //   if (howManyQRCodes) howManyQRCodes.classList.remove("error-value");
  //   if (startValue) startValue.classList.remove("error-value");
  // очищаем результат, если там что-то было
  XLSdata.splice(0, XLSdata.length);
  // проверяем поле с количеством QR
  const howManyQRCodesString = dataFromInputs[0] == "" ? 10 : dataFromInputs[0];
  // проверяем поле с указанием длины
  const QRCodeLengthString = dataFromInputs[1] == "" ? 3 : dataFromInputs[1];
  // проверяем поле со стартовым номером
  const startValueString = dataFromInputs[2] == "" ? 0 : dataFromInputs[2];
  // проверяем префикс
  // const prefixString = dataFromInputs[3] == "" ? "" : dataFromInputs[3];
  // проверяем суффикс
  // const suffixString = dataFromInputs[4] == "" ? "" : dataFromInputs[4];

  // глобальный цикл для создания каждой строчки в массиве со значениями для QR
  for (let i = 0; i < howManyQRCodesString; i++) {
    // XLSdata.push(`${i + Number(startValueString) + suffixString}`);
    XLSdata.push(`${i + Number(startValueString)}`);
    XLSdata[i] = XLSdata[i].split("");

    // подстановка нулей впереди значения в зависимости от длины
    if (XLSdata[i].length < QRCodeLengthString) {
      // for (let y = XLSdata[i].length; y < QRCodeLengthString - prefixString.length; y++) {
      for (let y = XLSdata[i].length; y < QRCodeLengthString; y++) {
        XLSdata[i].unshift("0");
      }
    }
    // добавляем префикс
    // XLSdata[i].unshift(prefixString);
    // склейка в строку
    XLSdata[i] = XLSdata[i].join("");

    // проверка на длину строки
    // if (XLSdata[i].length > QRCodeLengthString) {
    //   if (QRCodeLength) QRCodeLength.classList.add("error-value");
    //   return;
    // }
  }

  return XLSdata;
}
