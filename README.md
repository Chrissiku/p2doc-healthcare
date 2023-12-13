# P2DOC HEALTHCARE

Is a platform that leverage the power of web5 to ensure consealed medical records sharing between patients and doctors hence comes the name P2Doc i.e. (Patient-to-Doctor). 

## Motivation
Many individuals died as a result of not finding a confidential way or mean through which their medical records could be shared and its confidentiality is till maintained even when it is been shared across the internet. Looking at the prior webs technologies such as web2, and web3, these are centralized meaning users data are kept by third-party entity which makes users' data to be vulnerable to be exposed to the other actors who can take avert advantages on the data's owners. Therefore, we come of with idea of concealing medical records sharing between a doctor and a patient leveraging the potency of blockchain decentralized technology (web5).



## Get Started
### Running P2DOC HEALTHCARE Locally
Inorder to run P2DOC HealthCare solution successfully on your local system, thus are the steps you need follow:

On any of your texteditor software, in our case now, vscode, open its terminal then navigate to a desireable path where you would want a copy of our repo stay, afterward, run the following command on the terminal

- Step 1: Clone the inistance of the P2DOC's repo using 
```
git clone https://github.com/Chrissiku/p2doc-healthcare.git
```

- Step 2: Change the directory (dir) to p2doc-healthcare path
```
cd p2doc-healthcare
```
- Step 3: Install all the required dependencies (using npm in our case)
```
npm install
```
Note: After a successful installation, hence do the perform the next step
- Step 4: Run P2DOC HEALTHCARE Locally
```
npm run dev
``` 
- Step 5: Copy the generated URL and paste it on browser
```
http://localhost:5173/
```
**IMPORTANT NOTE**
For the website to work properly, you will need to generate the following

- VITE_PUBLIC_DID (Vite Public Decentralized Identifier)
- VITE_PROTOCOL_URL (http://localhost:5173/)

These are got by console logging it out, then copy. Afterwhat, create a file called .env at the root directory wherein you should paste the copied credentials i.e. VITE_PUBLIC_DID, and VITE_PROTOCOL_URL

```
VITE_PUBLIC_DID=did:ion:EiCXbwh...JnIn19
VITE_PROTOCOL_URL=http://localhost:5173/
```

### Running P2DOC HEALTHCARE on Production
To run on production, use the following url:
```
https://p2doc-healthcare-rho.vercel.app/
```

# P2DOC's Website
This website's users are doctors and patients. at the homepage of our website at the top, there is a navbar which comprises of the logo, navbar tabs (About | Services | Contact), and a button at the right corner called 'Get Started'

When a user click on the 'Get Started' button, this prompts the user to select who the user is (doctor | patient | neither)

**User as a doctor:** when a user selects doctor, he or she is prompted for name, speciality, and year of experience. After supplying all of those, the doctor gets connected to the DWA. Therefore, on the doctor dashboard the following operations or features can be carried out by the doctor.

- View the incoming requests from onboarded patients.

- Accept or Reject incoming requests

- View the recently booked appointment

- 

