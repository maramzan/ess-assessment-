import { Box, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import AddImageIcon from "../../../../assets/png/adImageIcon.png";

function MyDropzone() {
  const [selectedImage, setSelectedImage] = useState<any[]>([]);
  const onDrop = useCallback((acceptedFiles: any[]) => {
    setSelectedImage(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      sx={{
        border: "2px dashed rgba(0,0,0,0.15)",
        borderRadius: 2,
        padding: "20px 0",
        cursor: "pointer",
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />

      {isDragActive ? (
        <Typography fontSize={24}>Drop the files here</Typography>
      ) : (
        <>
          {selectedImage[0]?.name ? (
            <Typography textAlign={"center"} fontSize={24} marginTop={1}>
              {selectedImage[0]?.name}
            </Typography>
          ) : (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
                src={AddImageIcon}
              />
              <Typography textAlign={"center"} fontSize={24} marginTop={1}>
                Drag and Drop Images
              </Typography>

              <Typography
                sx={{
                  textDecoration: "underline",
                  textAlign: "center",
                  marginTop: 1,
                }}
              >
                {"Or Browse"}
              </Typography>
            </Box>
          )}
        </>
      )}
    </Box>
  );
}

export default MyDropzone;
