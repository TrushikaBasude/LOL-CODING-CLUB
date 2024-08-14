import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PdfPage = () => {
    const { file } = useParams();
    const [pdfSrc, setPdfSrc] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPdf = async () => {
            try {
                const pdfModule = await import(`../Reports/${file}`);
                setPdfSrc(pdfModule.default);
            } catch (error) {
                console.error('Error loading PDF:', error);
            }
            setLoading(false)
        };

        loadPdf();
    }, [file]);

    return (
        <div>
            {!loading ? (
                pdfSrc ? (
                    <iframe
                        title="PDF Viewer"
                        src={pdfSrc}
                        style={{
                            border: 'none',
                            width: "100%",
                            height: "99.9vh"
                        }}
                        data-aos="fade-up"
                    ></iframe>
                //add a 404 component here
                ) : <h1>Not Found</h1>
            ) : (
                <h1>Loading PDF...</h1>
            )}
        </div>
    );
};

export default PdfPage;
