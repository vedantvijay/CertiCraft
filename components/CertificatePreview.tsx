import React from "react";
import Image from "next/image";

interface CertificatePreviewProps {
  name: string;
  course: string;
  date: string;
}

const CertificatePreview: React.FC<CertificatePreviewProps> = ({
  name,
  course,
  date,
}) => {
  return (
    <div className="bg-card text-card-foreground p-8 border-8 border-muted rounded-lg shadow-lg">
      <div className="flex justify-center mb-8">
        <Image
          src="https://via.placeholder.com/300x100.png?text=Company+Logo"
          alt="Company Logo"
          width={300}
          height={100}
          className="dark:filter dark:invert"
        />
      </div>
      <h2 className="text-4xl font-bold text-center mb-8">
        Certificate of Completion
      </h2>
      <p className="text-xl text-center mb-8 text-muted-foreground">
        This is to certify that
      </p>
      <p className="text-3xl font-bold text-center mb-8">{name || "[Name]"}</p>
      <p className="text-xl text-center mb-8 text-muted-foreground">
        has successfully completed the course
      </p>
      <p className="text-2xl font-bold text-center mb-8">
        {course || "[Course Name]"}
      </p>
      <p className="text-xl text-center mb-8 text-muted-foreground">on</p>
      <p className="text-2xl font-bold text-center mb-8">{date || "[Date]"}</p>
      <div className="flex justify-between items-center mt-16">
        <div className="w-1/3 border-t-2 border-muted pt-2">
          <p className="text-center text-muted-foreground">Date</p>
        </div>
        <div className="w-1/3 border-t-2 border-muted pt-2">
          <p className="text-center text-muted-foreground">Signature</p>
        </div>
      </div>
    </div>
  );
};

export default CertificatePreview;
