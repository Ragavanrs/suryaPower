// import React, { useState } from 'react';
// import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';

// const Upload = () => {
//   const [productName, setProductName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState(''); // New state for price
//   const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleFileChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setUploading(true);
//     setMessage('');

//     if (!image || !productName || !description || !price) {
//       setMessage('Please fill in all fields and select an image.');
//       setUploading(false);
//       return;
//     }

//     // Upload image to S3
 

//     try {

//       // Prepare the JSON data
//       const productData = {
//         name: productName,
//         description: description,
//         price: price, // Include price
//         imageUrl: Location,
//       };
//       console.log(productData);
//       // Send the data to your backend `/product` API endpoint
//       const response = await fetch('http://localhost:5000/api/product', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(productData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to upload product data');
//       }

//       setMessage('Product uploaded successfully!');
//     } catch (error) {
//       console.error('Error uploading image or sending data:', error);
//       setMessage('Error uploading the product. Please try again.');
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <Box 
//       sx={{
//         maxWidth: 500,
//         mx: 'auto',
//         mt: 5,
//         p: 3,
//         boxShadow: 3,
//         borderRadius: 2,
//         backgroundColor: '#f9f9f9'
//       }}
//     >
//       <Typography variant="h4" align="center" gutterBottom>
//         Upload Product
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Box mb={3}>
//           <TextField
//             fullWidth
//             label="Product Name"
//             variant="outlined"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             required
//           />
//         </Box>
//         <Box mb={3}>
//           <TextField
//             fullWidth
//             label="Description"
//             variant="outlined"
//             multiline
//             rows={4}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </Box>
//         <Box mb={3}>
//           <TextField
//             fullWidth
//             label="Price"
//             variant="outlined"
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </Box>
//         <Box mb={3}>
//           <Button
//             variant="contained"
//             component="label"
//             fullWidth
//             sx={{ py: 1.5 }}
//           >
//             {image ? image.name : 'Choose Image'}
//             <input
//               type="file"
//               accept="image/*"
//               hidden
//               onChange={handleFileChange}
//               required
//             />
//           </Button>
//         </Box>
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           color="primary"
//           sx={{ py: 1.5 }}
//           disabled={uploading}
//         >
//           {uploading ? <CircularProgress size={24} /> : 'Upload'}
//         </Button>
//       </form>
//       {message && (
//         <Typography 
//           mt={2} 
//           color={message.includes('successfully') ? 'green' : 'red'}
//         >
//           {message}
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default Upload;
