import { v2 as cloudinary } from 'cloudinary';
import { ConfigService } from '@nestjs/config';
import { Options } from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { File as MulterFile } from 'multer';
import streamifier from 'streamifier';

export const CloudinaryConfig = (configService: ConfigService): Options => {
    cloudinary.config({
        cloud_name: configService.get<string>('CLOUDINARY_CLOUD_NAME'),
        api_key: configService.get<string>('CLOUDINARY_API_KEY'),
        api_secret: configService.get<string>('CLOUDINARY_API_SECRET'),
    });

    return {
        storage: new CloudinaryStorage({
            cloudinary: cloudinary,
            params: {
                folder: 'categories',
                allowedFormats: ['jpg', 'png', 'jpeg', 'webp'],
            } as any, 
        }),
    };
};


export const uploadImage = async (file: MulterFile): Promise<string> => {
    try {
        console.log('Uploading file:', file.originalname);

        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'your-folder-name' }, // Optional: Specify folder
                (error, result) => {
                    if (error) {
                        console.error('Cloudinary Upload Error:', error);
                        return reject(new Error('Failed to upload image to Cloudinary'));
                    }
                    resolve(result!.url);
                }
            );

            streamifier.createReadStream(file.buffer).pipe(uploadStream);
        });

    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        throw new Error('Failed to upload image to Cloudinary');
    }
};

// export const uploadImage = async (file: MulterFile): Promise<string> => {
//     try {
//         console.log(file)
//         const tempFilePath = file.buffer;

//         if (!fs.existsSync(tempFilePath)) {
//             throw new Error(`File not found at path: ${tempFilePath}`);
//         }

//         const result = await cloudinary.uploader.upload(tempFilePath);
//         fs.unlinkSync(tempFilePath); 
//         return result.url; 
//     } catch (error) {
//         console.error('Error uploading image to Cloudinary:', error.message);
//         throw new Error('Failed to upload image to Cloudinary');
//     }
// };
