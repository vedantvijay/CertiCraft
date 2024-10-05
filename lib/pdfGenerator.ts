import jsPDF from "jspdf";

export const generatePDF = (name: string, course: string, date: string) => {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });

  // Set background color
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, 297, 210, "F");

  // Add border
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(5);
  doc.rect(10, 10, 277, 190);

  // doc.addImage(
  //   "https://via.placeholder.com/300x100.png?text=Company+Logo",
  //   "PNG",
  //   98.5,
  //   20,
  //   100,
  //   33.33
  // );

  // Add logo (placeholder)
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("Company Logo", 148.5, 40, { align: "center" });

  // Set font styles
  doc.setFont("helvetica", "bold");
  doc.setFontSize(36);
  doc.setTextColor(0, 0, 0);

  // Add certificate content
  doc.text("Certificate of Completion", 148.5, 80, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(18);
  doc.setTextColor(100, 100, 100);
  doc.text("This is to certify that", 148.5, 100, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(0, 0, 0);
  doc.text(name || "[Name]", 148.5, 115, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(18);
  doc.setTextColor(100, 100, 100);
  doc.text("has successfully completed the course", 148.5, 130, {
    align: "center",
  });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(0, 0, 0);
  doc.text(course || "[Course Name]", 148.5, 145, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(18);
  doc.setTextColor(100, 100, 100);
  doc.text(`on ${date || "[Date]"}`, 148.5, 160, { align: "center" });

  // Add signature lines
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.5);
  doc.line(73.5, 180, 123.5, 180);
  doc.line(173.5, 180, 223.5, 180);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text("Date", 98.5, 190, { align: "center" });
  doc.text("Signature", 198.5, 190, { align: "center" });

  // Save the PDF
  doc.save("certificate.pdf");
};
