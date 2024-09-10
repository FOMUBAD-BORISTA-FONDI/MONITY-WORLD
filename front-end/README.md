# Monity World Platform

Monity World is an advanced financial platform designed to facilitate both local and international payments using mobile numbers. The platform consists of three main applications: **Client**, **Merchant**, and **Admin**, each serving a crucial role in ensuring secure and smooth transactions. The back-end architecture is powered by AWS services for scalability, security, and performance.

## Features

### Client Application
- **User Registration & Authentication**
  - Clients can register through the mobile application, with automatic account number generation.
- **NFC Card Payments**
  - Transactions are securely processed using NFC cards linked to user accounts (mobile devices do not handle NFC payments).
- **Transaction Support**
  - Supports local and international money transfers, mobile top-ups, and various other financial transactions.

### Merchant Application
- **Merchant Registration**
  - Merchants are registered through a manager-assigned account number.
- **NFC Payment Acceptance**
  - Merchants can process payments using NFC through the phone's native NFC feature or a connected USB NFC kit.
- **Sales & Price Management**
  - Merchants have tools to manage prices, track sales, and review transaction history.

### Partner Application
- **Service Integration**
  - Partners can integrate their services to facilitate various transactions via the Monity World platform.

### Admin Platform
- **User & Merchant Management**
  - Manage user and merchant data, assign accounts, and oversee the entire platform’s activities through an admin dashboard.
  
## Technology Stack
- **Frontend (Mobile)**: Developed for both iOS and Android platforms using [Flutter](https://flutter.dev/).
- **Backend**: Built with [Node.js](https://nodejs.org) and/or [Express.js](https://expressjs.com), utilizing AWS services.
- **Database**: Utilizes [MongoDB](https://www.mongodb.com) for flexible and scalable data storage.
- **Admin Platform**: A web-based admin dashboard developed with either [React.js](https://reactjs.org) or [Next.js](https://reactjs.org) for the front-end and a Node.js backend.

## AWS Services
- **Amazon S3**: For file storage.
- **Amazon SNS**: For notifications and alerts.
- **Amazon EC2 & Lambda**: For scalable backend operations.
  
## Deployment
- **Android**: Estimated deployment cost is around ***.
- **iOS**: Estimated deployment cost is between *** and *** XAF (*** recommended).
- **Web (Admin)**: Deployment options will depend on your hosting preferences.

## Developers
- **Frontend Developer (Mobile)**: Handles both iOS and Android development.
- **Backend Developer**: Responsible for developing the back-end logic for all applications.
- **Full-stack Web Developer**: Manages the front-end and back-end for the Admin platform.

## AWS Services Initial Setup
An additional **____ XAF** is required for the initial purchase of AWS services (S3, SNS, MongoDB, etc.).

## Contribution
Ehm..... !!!
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
