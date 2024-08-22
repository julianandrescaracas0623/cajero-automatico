import jsPDF from "jspdf";
import "jspdf-autotable";

const GeneratePDF = ({ info, saldoRetiro }) => {
  const doc = new jsPDF();

  // Título y fecha
  doc.setFontSize(26);
  doc.setFont("helvetica", "bold");
  doc.text("Reporte de Cuenta", 105, 20, { align: "center" });
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 105, 30, {
    align: "center",
  });

  // Línea separadora
  doc.setLineWidth(0.75);
  doc.setDrawColor(0, 102, 204); // Color de la línea
  doc.line(10, 35, 200, 35);

  // Verificar que info es un array
  if (!Array.isArray(info)) {
    console.error("Expected 'info' to be an array, but got:", info);
    return;
  }

  // Agregar tabla de datos
  const tableData = info.map(item => [item.title, item.content]);
  doc.autoTable({
    startY: 40,
    head: [["Título", "Contenido"]],
    body: tableData,
    theme: "grid",
    headStyles: {
      fillColor: [0, 102, 204],
      textColor: [255, 255, 255],
      fontSize: 12,
      font: "helvetica",
      halign: "center",
    },
    bodyStyles: {
      fontSize: 11,
      font: "helvetica",
      halign: "left",
    },
    margin: { left: 10, right: 10 },
    styles: {
      cellPadding: 8,
      minCellHeight: 12,
      lineColor: [0, 0, 0],
      lineWidth: 0.1,
    },
    pageBreak: "auto",
  });

  // Agregar información de saldo de retiro
  if (saldoRetiro !== undefined && saldoRetiro !== null) {
    const yPosition = doc.autoTable.previous.finalY + 10;
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Saldo Retiro:", 10, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(`$${saldoRetiro}`, 50, yPosition);
  }

  // Agregar pie de página
  const pageHeight = doc.internal.pageSize.height;
  const pageWidth = doc.internal.pageSize.width;

  // Texto del pie de página
  const footerText1 =
    "Este es un documento generado automáticamente. Por favor, contacte a la entidad para más información.";
  const footerText2 = "Contacto: info@banco.com | Teléfono: (123) 456-7890";

  // Ajustar el tamaño de la fuente para el pie de página
  const footerFontSize = 11; // Tamaño de fuente más pequeño para el pie de página

  // Establecer la fuente y el tamaño
  doc.setFontSize(footerFontSize);
  doc.setFont("helvetica", "normal");

  // Calcular la posición horizontal para centrar el texto
  const xPosition =
    (pageWidth - (doc.getStringUnitWidth(footerText1) * footerFontSize) / 100) /
    2;

  // Agregar el texto del pie de página
  doc.text(footerText1, xPosition - 80, pageHeight - 30);
  doc.text(footerText2, xPosition - 80, pageHeight - 20);

  // Guardar el PDF
  doc.save("reporte.pdf");
};

export default GeneratePDF;
