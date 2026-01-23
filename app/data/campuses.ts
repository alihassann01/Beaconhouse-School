// Comprehensive Beaconhouse Campus Data - 185 Flagship Campuses across 9 Countries
// This excludes affiliates like "The Educators" - only company-owned schools

export interface Campus {
    name: string;
    city: string;
    address?: string;
    type: 'school' | 'preschool' | 'college' | 'partner';
    lat: number;
    lng: number;
}

export interface CountryData {
    code: string;
    name: string;
    flag: string;
    description: string;
    totalCampuses: number;
    totalStudents: string;
    regions?: {
        name: string;
        campuses: Campus[];
    }[];
    campuses: Campus[];
}

// =============================================================================
// PAKISTAN - 130 Flagship Campuses (North 36, Central 65, South 29)
// =============================================================================
export const pakistanCampuses: CountryData = {
    code: 'pakistan',
    name: 'Pakistan',
    flag: '🇵🇰',
    description: 'Over 130 flagship schools in 30+ cities - the primary network since 1975',
    totalCampuses: 130,
    totalStudents: '280,000+',
    regions: [
        {
            name: 'Northern Region',
            campuses: [
                // Islamabad (12 campuses)
                { name: 'Beaconhouse Margalla Campus (BMI)', city: 'Islamabad', address: 'H-8/4, Pitras Bukhari Road', lat: 33.69, lng: 73.05, type: 'college' },
                { name: 'City Campus H-8', city: 'Islamabad', address: 'H-8/1', lat: 33.69, lng: 73.04, type: 'school' },
                { name: 'F-7/4 Campus (KG)', city: 'Islamabad', address: 'Street 55, F-7/4', lat: 33.72, lng: 73.07, type: 'preschool' },
                { name: 'F-8/3 Campus', city: 'Islamabad', address: 'Street 10, F-8/3', lat: 33.71, lng: 73.05, type: 'school' },
                { name: 'F-10/4 Campus', city: 'Islamabad', address: 'Street 38, F-10/4', lat: 33.69, lng: 73.01, type: 'school' },
                { name: 'F-11 Campus', city: 'Islamabad', address: 'F-11/3', lat: 33.68, lng: 73.02, type: 'school' },
                { name: 'I-8 Campus', city: 'Islamabad', address: 'Sector I-8/4', lat: 33.66, lng: 73.08, type: 'school' },
                { name: 'G-15 Campus', city: 'Islamabad', address: 'Khayaban-e-Kashmir, G-15', lat: 33.64, lng: 72.98, type: 'school' },
                { name: 'Metropolitan Campus', city: 'Islamabad', address: 'G-13', lat: 33.65, lng: 72.99, type: 'school' },
                { name: 'Newlands Islamabad', city: 'Islamabad', address: 'Banigala, Hill View Road', lat: 33.70, lng: 73.13, type: 'school' },
                { name: 'Gulberg Greens Campus', city: 'Islamabad', address: 'Plot 578, Block D', lat: 33.62, lng: 73.00, type: 'school' },
                { name: 'Tarnol Campus', city: 'Islamabad', address: 'Tarnol', lat: 33.65, lng: 72.83, type: 'school' },

                // Rawalpindi (9 campuses)
                { name: 'Satellite Town Boys', city: 'Rawalpindi', address: 'F-776, Block F, 6th Road', lat: 33.63, lng: 73.04, type: 'school' },
                { name: 'Satellite Town Girls', city: 'Rawalpindi', address: 'Satellite Town', lat: 33.62, lng: 73.03, type: 'school' },
                { name: 'Satellite Town Primary', city: 'Rawalpindi', address: 'Satellite Town', lat: 33.62, lng: 73.04, type: 'school' },
                { name: 'Peshawar Road Campus', city: 'Rawalpindi', address: 'Peshawar Road', lat: 33.60, lng: 73.05, type: 'school' },
                { name: 'Civil Lines Campus', city: 'Rawalpindi', address: 'Tulsa Road, Lalazar', lat: 33.59, lng: 73.07, type: 'school' },
                { name: 'Tipu Sultan Campus', city: 'Rawalpindi', address: 'Tipu Sultan Road', lat: 33.61, lng: 73.06, type: 'school' },
                { name: 'West Ridge Campus', city: 'Rawalpindi', address: '11 Hali Road, West Ridge I', lat: 33.60, lng: 73.04, type: 'school' },
                { name: 'Bahria Town Campus', city: 'Rawalpindi', address: 'Phase 1, Bahria Town', lat: 33.52, lng: 73.09, type: 'school' },
                { name: 'Harley Street Campus', city: 'Rawalpindi', address: 'Harley Street', lat: 33.59, lng: 73.05, type: 'school' },

                // Peshawar (7 campuses)
                { name: 'Frontier Campus A Levels', city: 'Peshawar', address: 'Phase 3, Hayatabad', lat: 34.00, lng: 71.47, type: 'college' },
                { name: 'Frontier Campus Boys', city: 'Peshawar', address: 'Phase 3, Hayatabad', lat: 34.00, lng: 71.46, type: 'school' },
                { name: 'Frontier Campus Girls', city: 'Peshawar', address: 'Phase 3, Hayatabad', lat: 34.01, lng: 71.47, type: 'school' },
                { name: 'Khyber Campus', city: 'Peshawar', address: 'Sector H-3, Phase II, Hayatabad', lat: 33.99, lng: 71.45, type: 'school' },
                { name: 'Peshawar KG Campus', city: 'Peshawar', address: 'Landi Arbab Road, Cantt', lat: 34.01, lng: 71.53, type: 'preschool' },
                { name: 'University Town Campus', city: 'Peshawar', address: 'Gul Mohar Lane', lat: 34.02, lng: 71.55, type: 'school' },
                { name: 'Jamrud Campus', city: 'Peshawar', address: 'Jamrud Road', lat: 34.01, lng: 71.50, type: 'school' },

                // Abbottabad (2 campuses)
                { name: 'Abbottabad Senior Campus', city: 'Abbottabad', address: 'Kakul Road', lat: 34.17, lng: 73.24, type: 'school' },
                { name: 'Abbottabad KG Campus', city: 'Abbottabad', address: 'Jinnahabad', lat: 34.15, lng: 73.22, type: 'preschool' },

                // Other Northern Cities (6 campuses)
                { name: 'Jalala Campus', city: 'Mardan', address: 'Jalala, Mardan', lat: 34.20, lng: 72.05, type: 'school' },
                { name: 'Nowshera Campus', city: 'Nowshera', address: 'Nowshera Cantt', lat: 34.02, lng: 71.98, type: 'school' },
                { name: 'Wah Cantt Campus', city: 'Wah Cantt', address: "Officer's Colony", lat: 33.78, lng: 72.73, type: 'school' },
                { name: 'Mirpur Campus', city: 'Mirpur AJK', address: 'Mirpur, Azad Kashmir', lat: 33.15, lng: 73.75, type: 'school' },
                { name: 'Swat Campus', city: 'Swat', address: 'Saidu Sharif', lat: 34.75, lng: 72.35, type: 'school' },
                { name: 'Risalpur Campus', city: 'Risalpur', address: 'Risalpur', lat: 34.06, lng: 71.97, type: 'school' },
            ]
        },
        {
            name: 'Central Region',
            campuses: [
                // Lahore (24 campuses - HQ)
                { name: 'Liberty Campus (Main)', city: 'Lahore', address: '47-C/II, Gulberg III', lat: 31.51, lng: 74.34, type: 'college' },
                { name: 'Defence Campus (BDC)', city: 'Lahore', address: 'Sector Z, Phase III, DHA', lat: 31.47, lng: 74.38, type: 'college' },
                { name: 'TNS Beaconhouse Gulberg', city: 'Lahore', address: 'Hali Road, Gulberg III', lat: 31.52, lng: 74.35, type: 'school' },
                { name: 'TNS Beaconhouse DHA', city: 'Lahore', address: 'Phase V, DHA', lat: 31.46, lng: 74.40, type: 'school' },
                { name: 'Newlands Lahore', city: 'Lahore', address: 'Block J, Phase VI, DHA', lat: 31.45, lng: 74.41, type: 'school' },
                { name: 'Johar Town Boys Campus', city: 'Lahore', address: 'Block J, Johar Town', lat: 31.46, lng: 74.27, type: 'school' },
                { name: 'Johar Town Girls Campus', city: 'Lahore', address: 'Block F, Phase 1, Johar Town', lat: 31.47, lng: 74.28, type: 'school' },
                { name: 'Johar Town Junior Campus', city: 'Lahore', address: 'Johar Town', lat: 31.46, lng: 74.26, type: 'preschool' },
                { name: 'Garden Town Campus', city: 'Lahore', address: 'New Garden Block', lat: 31.50, lng: 74.31, type: 'school' },
                { name: 'Model Town Boys Campus', city: 'Lahore', address: 'Circular Road, Model Town', lat: 31.48, lng: 74.32, type: 'school' },
                { name: 'Model Town Junior Campus', city: 'Lahore', address: '17-G, Model Town', lat: 31.49, lng: 74.32, type: 'preschool' },
                { name: 'Model Town Girls Campus', city: 'Lahore', address: 'Model Town', lat: 31.47, lng: 74.31, type: 'school' },
                { name: 'Valencia Town Campus', city: 'Lahore', address: 'Block B, Valencia Town', lat: 31.44, lng: 74.26, type: 'school' },
                { name: 'Canal Side Campus', city: 'Lahore', address: 'Raiwind Road', lat: 31.43, lng: 74.24, type: 'college' },
                { name: 'Bahria Town Campus', city: 'Lahore', address: 'Sector C, Bahria Town', lat: 31.36, lng: 74.18, type: 'school' },
                { name: 'Bahria Town Senior Campus', city: 'Lahore', address: 'Sector D, Bahria Town', lat: 31.37, lng: 74.19, type: 'college' },
                { name: 'Askari X Campus', city: 'Lahore', address: 'Sector A, Airport Road', lat: 31.43, lng: 74.25, type: 'school' },
                { name: 'Allama Iqbal Town Campus', city: 'Lahore', address: 'Ravi Block', lat: 31.50, lng: 74.29, type: 'school' },
                { name: 'Ring Road Campus', city: 'Lahore', address: "Banker's Town", lat: 31.42, lng: 74.22, type: 'school' },
                { name: 'Upper Mall Campus', city: 'Lahore', address: 'Upper Mall Scheme', lat: 31.53, lng: 74.33, type: 'school' },
                { name: 'Wapda Town Campus', city: 'Lahore', address: 'Wapda Town', lat: 31.45, lng: 74.26, type: 'school' },
                { name: 'Cantt Campus', city: 'Lahore', address: 'Tufail Road, Lahore Cantt', lat: 31.54, lng: 74.36, type: 'school' },
                { name: 'Peco Road Campus', city: 'Lahore', address: 'Maulana Shaukat Ali Road', lat: 31.51, lng: 74.30, type: 'school' },
                { name: 'Cavalry Ground Campus', city: 'Lahore', address: 'Cavalry Ground', lat: 31.50, lng: 74.37, type: 'school' },

                // Faisalabad (5 campuses)
                { name: 'Faisalabad Main Campus', city: 'Faisalabad', address: 'East Canal Road', lat: 31.42, lng: 73.09, type: 'college' },
                { name: 'Faisalabad KG I', city: 'Faisalabad', address: 'East Canal Road', lat: 31.43, lng: 73.08, type: 'preschool' },
                { name: 'Faisalabad KG II', city: 'Faisalabad', address: 'East Canal Road', lat: 31.43, lng: 73.10, type: 'preschool' },
                { name: 'Faisalabad Primary', city: 'Faisalabad', address: 'East Canal Road', lat: 31.42, lng: 73.08, type: 'school' },
                { name: 'Civil Lines Campus', city: 'Faisalabad', address: 'Civil Lines', lat: 31.41, lng: 73.07, type: 'school' },

                // Multan (6 campuses)
                { name: 'Multan Main Campus', city: 'Multan', address: 'Abdali Road', lat: 30.20, lng: 71.46, type: 'school' },
                { name: 'Multan A Level Campus', city: 'Multan', address: 'Abdali Road', lat: 30.21, lng: 71.45, type: 'college' },
                { name: 'Multan KG Campus', city: 'Multan', address: 'Abdali Road', lat: 30.19, lng: 71.46, type: 'preschool' },
                { name: 'Newlands Multan', city: 'Multan', address: 'Bosan Road', lat: 30.18, lng: 71.44, type: 'school' },
                { name: 'Officers Colony Campus', city: 'Multan', address: 'Officers Colony', lat: 30.22, lng: 71.47, type: 'school' },
                { name: 'Shamsabad Campus', city: 'Multan', address: 'Shamsabad', lat: 30.17, lng: 71.43, type: 'school' },

                // Gujranwala (4 campuses)
                { name: 'Palm Tree Campus', city: 'Gujranwala', address: 'Sialkot Bypass', lat: 32.16, lng: 74.19, type: 'college' },
                { name: 'Gujranwala KG Campus', city: 'Gujranwala', address: 'Civil Lines', lat: 32.15, lng: 74.18, type: 'preschool' },
                { name: 'Gujranwala KG-II', city: 'Gujranwala', address: 'Satellite Town', lat: 32.17, lng: 74.20, type: 'preschool' },
                { name: 'Cantt Campus', city: 'Gujranwala', address: 'Gujranwala Cantt', lat: 32.14, lng: 74.17, type: 'school' },

                // Sialkot (3 campuses)
                { name: 'Sialkot Main Campus', city: 'Sialkot', address: 'Aziz Shaheed Road, Cantt', lat: 32.50, lng: 74.53, type: 'school' },
                { name: 'Sialkot Primary Campus', city: 'Sialkot', address: 'Cantt', lat: 32.49, lng: 74.52, type: 'school' },
                { name: 'Sialkot Junior Campus', city: 'Sialkot', address: 'Cantt', lat: 32.51, lng: 74.54, type: 'preschool' },

                // Other Central Punjab (23 campuses)
                { name: 'Sargodha Main Campus', city: 'Sargodha', address: 'University Road', lat: 32.08, lng: 72.67, type: 'school' },
                { name: 'Sargodha Girls Campus', city: 'Sargodha', address: 'Sargodha', lat: 32.07, lng: 72.66, type: 'school' },
                { name: 'Sahiwal Boys Campus', city: 'Sahiwal', address: 'Police Lines Road', lat: 30.67, lng: 73.11, type: 'school' },
                { name: 'Sahiwal Girls Campus', city: 'Sahiwal', address: 'Police Lines Road', lat: 30.68, lng: 73.12, type: 'school' },
                { name: 'Okara Campus', city: 'Okara', address: 'GT Road', lat: 30.81, lng: 73.45, type: 'school' },
                { name: 'Okara Junior Campus', city: 'Okara', address: 'Okara', lat: 30.80, lng: 73.44, type: 'preschool' },
                { name: 'Sheikhupura Secondary', city: 'Sheikhupura', address: 'Lahore-Sargodha Road', lat: 31.71, lng: 73.98, type: 'school' },
                { name: 'Sheikhupura Primary', city: 'Sheikhupura', address: 'Sheikhupura', lat: 31.70, lng: 73.97, type: 'school' },
                { name: 'Gujrat Main Campus', city: 'Gujrat', address: 'GT Road', lat: 32.57, lng: 74.08, type: 'school' },
                { name: 'Gujrat KG Campus', city: 'Gujrat', address: 'Gujrat', lat: 32.56, lng: 74.07, type: 'preschool' },
                { name: 'Kharian Campus', city: 'Kharian', address: 'Malikpur, GT Road', lat: 32.81, lng: 73.88, type: 'school' },
                { name: 'Jhelum Campus', city: 'Jhelum', address: 'GT Road', lat: 32.94, lng: 73.73, type: 'school' },
                { name: 'Rahim Yar Khan Campus', city: 'Rahim Yar Khan', address: 'Canal Road', lat: 28.42, lng: 70.30, type: 'school' },
                { name: 'Bahawalpur Main Campus', city: 'Bahawalpur', address: 'Model Town A', lat: 29.39, lng: 71.68, type: 'school' },
                { name: 'Bahawalpur Junior Campus', city: 'Bahawalpur', address: 'Bahawalpur', lat: 29.38, lng: 71.67, type: 'preschool' },
                { name: 'Mandi Bahauddin Campus', city: 'Mandi Bahauddin', address: 'Mandi Bahauddin', lat: 32.58, lng: 73.49, type: 'school' },
                { name: 'Hafizabad Campus', city: 'Hafizabad', address: 'Hafizabad', lat: 32.07, lng: 73.69, type: 'school' },
                { name: 'DG Khan Campus', city: 'Dera Ghazi Khan', address: 'DG Khan', lat: 30.05, lng: 70.64, type: 'school' },
                { name: 'Jhang Campus', city: 'Jhang', address: 'Jhang', lat: 31.27, lng: 72.31, type: 'school' },
                { name: 'Kasur Campus', city: 'Kasur', address: 'Kasur', lat: 31.12, lng: 74.45, type: 'school' },
                { name: 'Khanewal Campus', city: 'Khanewal', address: 'Khanewal', lat: 30.30, lng: 71.93, type: 'school' },
                { name: 'Mianwali Campus', city: 'Mianwali', address: 'Mianwali', lat: 32.58, lng: 71.55, type: 'school' },
                { name: 'Vehari Campus', city: 'Vehari', address: 'Vehari', lat: 30.04, lng: 72.35, type: 'school' },
            ]
        },
        {
            name: 'Southern Region',
            campuses: [
                // Karachi (17 campuses)
                { name: 'Jubilee Campus', city: 'Karachi', address: 'National Stadium Road', lat: 24.89, lng: 67.06, type: 'college' },
                { name: 'Defence Campus (Flagship)', city: 'Karachi', address: 'Phase 6, DHA', lat: 24.80, lng: 67.06, type: 'college' },
                { name: 'Clifton Campus', city: 'Karachi', address: 'Block 9, Clifton', lat: 24.82, lng: 67.03, type: 'school' },
                { name: 'PECHS Campus', city: 'Karachi', address: 'Block 2, PECHS', lat: 24.87, lng: 67.06, type: 'school' },
                { name: 'PECHS Primary', city: 'Karachi', address: 'PECHS', lat: 24.86, lng: 67.05, type: 'school' },
                { name: 'PECHS KG Campus', city: 'Karachi', address: 'PECHS', lat: 24.87, lng: 67.07, type: 'preschool' },
                { name: 'Gulshan Main Campus', city: 'Karachi', address: 'Block 4, Gulshan-e-Iqbal', lat: 24.92, lng: 67.09, type: 'school' },
                { name: 'Gulshan Primary', city: 'Karachi', address: 'Block 7, Gulshan-e-Iqbal', lat: 24.91, lng: 67.10, type: 'school' },
                { name: 'Gulshan KG Campus', city: 'Karachi', address: 'Gulshan-e-Iqbal', lat: 24.93, lng: 67.11, type: 'preschool' },
                { name: 'Gulshan Middle Campus', city: 'Karachi', address: 'Block 7', lat: 24.90, lng: 67.08, type: 'school' },
                { name: 'North Nazimabad Main', city: 'Karachi', address: 'Block B', lat: 24.94, lng: 67.03, type: 'school' },
                { name: 'North Nazimabad Primary', city: 'Karachi', address: 'North Nazimabad', lat: 24.95, lng: 67.04, type: 'school' },
                { name: 'North Nazimabad KG', city: 'Karachi', address: 'North Nazimabad', lat: 24.93, lng: 67.02, type: 'preschool' },
                { name: 'Gulistan-e-Jauhar Campus', city: 'Karachi', address: 'Block 12, Jauhar', lat: 24.93, lng: 67.12, type: 'school' },
                { name: 'Gulshan-e-Maymar Campus', city: 'Karachi', address: 'Sector Z, Maymar', lat: 24.96, lng: 67.07, type: 'school' },
                { name: 'Steel Town Campus', city: 'Karachi', address: 'Steel Town', lat: 24.85, lng: 67.35, type: 'school' },
                { name: 'Bahria Town Karachi', city: 'Karachi', address: 'Precinct 1', lat: 24.93, lng: 67.23, type: 'school' },

                // Hyderabad (4 campuses)
                { name: 'Qasimabad Campus', city: 'Hyderabad', address: 'North Qasimabad', lat: 25.40, lng: 68.33, type: 'school' },
                { name: 'Latifabad Campus', city: 'Hyderabad', address: 'Unit 3, Latifabad', lat: 25.43, lng: 68.35, type: 'school' },
                { name: 'Hyderabad Main Campus', city: 'Hyderabad', address: 'Thandi Sarak', lat: 25.38, lng: 68.37, type: 'school' },
                { name: 'Hyderabad KG Campus', city: 'Hyderabad', address: 'Hyderabad', lat: 25.39, lng: 68.36, type: 'preschool' },

                // Other Southern Cities (8 campuses)
                { name: 'Sukkur Campus', city: 'Sukkur', address: 'Military Road', lat: 27.70, lng: 68.86, type: 'school' },
                { name: 'Quetta Juniper Campus', city: 'Quetta', address: 'Zarghoon Road', lat: 30.18, lng: 67.01, type: 'school' },
                { name: 'Quetta Shahbaz Town', city: 'Quetta', address: 'Shahbaz Town', lat: 30.20, lng: 67.02, type: 'school' },
                { name: 'Larkana Campus', city: 'Larkana', address: 'Larkana', lat: 27.56, lng: 68.21, type: 'school' },
                { name: 'Mirpur Khas Campus', city: 'Mirpur Khas', address: 'Mirpur Khas', lat: 25.53, lng: 69.01, type: 'school' },
                { name: 'Nawabshah Campus', city: 'Nawabshah', address: 'Nawabshah', lat: 26.25, lng: 68.41, type: 'school' },
                { name: 'Khairpur Campus', city: 'Khairpur', address: 'Khairpur', lat: 27.53, lng: 68.76, type: 'school' },
                { name: 'Sadiqabad Campus', city: 'Sadiqabad', address: 'Sadiqabad', lat: 28.30, lng: 70.13, type: 'school' },
            ]
        }
    ],
    campuses: []
};

// =============================================================================
// MALAYSIA - 14 Locations
// =============================================================================
export const malaysiaCampuses: CountryData = {
    code: 'malaysia',
    name: 'Malaysia',
    flag: '🇲🇾',
    description: '14 schools and preschools in Kuala Lumpur and Selangor',
    totalCampuses: 14,
    totalStudents: '8,000+',
    campuses: [
        { name: 'Newlands International School', city: 'Cheras', address: 'Lot 823 & 924, Batu 9, Jalan Cheras, 43200 Selangor', lat: 3.10, lng: 101.73, type: 'school' },
        { name: 'Sri Murni', city: 'Cheras', address: 'Lot 823 & 924, Batu 9, Jalan Cheras', lat: 3.09, lng: 101.74, type: 'school' },
        { name: 'Bangsar Preschool', city: 'Bangsar', address: '2, Lorong Bukit Pantai 7, 59100 Kuala Lumpur', lat: 3.13, lng: 101.67, type: 'preschool' },
        { name: 'Sri Inai International School', city: 'Petaling Jaya', address: 'Petaling Jaya', lat: 3.10, lng: 101.64, type: 'school' },
        { name: 'Subang Jaya Campus', city: 'Subang Jaya', address: 'Subang Jaya', lat: 3.08, lng: 101.59, type: 'school' },
        { name: 'Peiken Puchong', city: 'Puchong', address: 'Puchong', lat: 3.02, lng: 101.62, type: 'preschool' },
        { name: 'Peiken Sri Petaling', city: 'Sri Petaling', address: 'Sri Petaling', lat: 3.07, lng: 101.68, type: 'preschool' },
        { name: 'Bunga Raya', city: 'Bunga Raya', address: 'Bunga Raya', lat: 3.11, lng: 101.65, type: 'school' },
        { name: "Sarah's Klang", city: 'Klang', address: 'Klang', lat: 3.04, lng: 101.45, type: 'school' },
        { name: 'BNEY SS2', city: 'Petaling Jaya', address: 'SS2, PJ', lat: 3.11, lng: 101.62, type: 'preschool' },
        { name: 'BNEY Ampang', city: 'Ampang', address: 'Ampang', lat: 3.15, lng: 101.76, type: 'preschool' },
        { name: 'Preschool Gamuda Gardens', city: 'Gamuda Gardens', address: 'Gamuda Gardens', lat: 3.22, lng: 101.55, type: 'preschool' },
        { name: 'Preschool Gasing', city: 'Petaling Jaya', address: 'Jalan Gasing', lat: 3.10, lng: 101.66, type: 'preschool' },
        { name: 'Primary School Gamuda', city: 'Gamuda Gardens', address: 'Gamuda Gardens', lat: 3.23, lng: 101.56, type: 'school' },
    ]
};

// =============================================================================
// UNITED KINGDOM - 10+ Locations
// =============================================================================
export const ukCampuses: CountryData = {
    code: 'united-kingdom',
    name: 'United Kingdom',
    flag: '🇬🇧',
    description: 'Schools and nurseries across East Sussex, Yorkshire, and Hull',
    totalCampuses: 10,
    totalStudents: '2,500+',
    campuses: [
        { name: 'Newlands School Hull', city: 'Hull', address: 'Lindsey Place, Anlaby Road, Hull, HU4 6AJ', lat: 53.74, lng: -0.33, type: 'school' },
        { name: 'Newland School for Girls', city: 'Hull', address: 'Cottingham Road, Hull, HU6 7RU', lat: 53.77, lng: -0.36, type: 'school' },
        { name: 'Cherub Nursery Beverley', city: 'Beverley', address: 'Beverley, East Riding', lat: 53.84, lng: -0.43, type: 'preschool' },
        { name: 'Cherub Nursery Hull', city: 'Hull', address: 'Hull, East Riding', lat: 53.76, lng: -0.35, type: 'preschool' },
        { name: 'Cherub Nursery Cottingham', city: 'Cottingham', address: 'Cottingham, East Riding', lat: 53.78, lng: -0.41, type: 'preschool' },
        { name: 'Pocklington Montessori', city: 'Pocklington', address: 'Pocklington, York', lat: 53.93, lng: -0.78, type: 'preschool' },
        { name: 'Cherub Leeds', city: 'Leeds', address: 'Leeds, Yorkshire', lat: 53.80, lng: -1.55, type: 'preschool' },
        { name: 'Cherub York', city: 'York', address: 'York, Yorkshire', lat: 53.96, lng: -1.08, type: 'preschool' },
        { name: 'Cherub Harrogate', city: 'Harrogate', address: 'Harrogate, Yorkshire', lat: 53.99, lng: -1.54, type: 'preschool' },
        { name: 'Corporate HQ London', city: 'London', address: 'London', lat: 51.51, lng: -0.13, type: 'school' },
    ]
};

// =============================================================================
// THAILAND - 4 BYS Schools
// =============================================================================
export const thailandCampuses: CountryData = {
    code: 'thailand',
    name: 'Thailand',
    flag: '🇹🇭',
    description: '4 Beaconhouse Yamsaard (BYS) schools in Bangkok region',
    totalCampuses: 4,
    totalStudents: '2,000+',
    campuses: [
        { name: 'BYS Rangsit', city: 'Rangsit', address: '2 Moo 6 Swaipracharat Rd, Pathum Thani 12150', lat: 13.98, lng: 100.62, type: 'school' },
        { name: 'BYS Hua Hin', city: 'Hua Hin', address: '35/5 Soi West Monorail Village, Prachuapkhirikhan 77110', lat: 12.57, lng: 99.96, type: 'school' },
        { name: 'BYS Ladprao', city: 'Bangkok', address: '90/335 Soi Vibhavadi 20 Rd, Jatujak Bangkok 10900', lat: 13.82, lng: 100.57, type: 'school' },
        { name: 'BYS International', city: 'Bangkok', address: '166/1 Phatthanakan 78 Alley, Prawet, Bangkok 10250', lat: 13.71, lng: 100.67, type: 'school' },
    ]
};

// =============================================================================
// PHILIPPINES - 4 Schools
// =============================================================================
export const philippinesCampuses: CountryData = {
    code: 'philippines',
    name: 'Philippines',
    flag: '🇵🇭',
    description: 'Schools in Cebu and Cabuyao serving Filipino families',
    totalCampuses: 4,
    totalStudents: '1,500+',
    campuses: [
        { name: 'St. Paul Learning Center', city: 'Cebu City', address: 'Guadalupe, Cebu City', lat: 10.32, lng: 123.89, type: 'school' },
        { name: 'Angels in Heaven - Elementary', city: 'Cabuyao', address: 'Cabuyao, Laguna', lat: 14.28, lng: 121.13, type: 'school' },
        { name: 'Angels in Heaven - High School', city: 'Cabuyao', address: 'Cabuyao, Laguna', lat: 14.27, lng: 121.12, type: 'school' },
        { name: 'Dame Theresiana de Montealegre', city: 'Manila', address: 'Manila', lat: 14.55, lng: 121.00, type: 'school' },
    ]
};

// =============================================================================
// UAE - 3 Schools
// =============================================================================
export const uaeCampuses: CountryData = {
    code: 'uae',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    description: 'International schools in Dubai, Sharjah, and Al Ain',
    totalCampuses: 3,
    totalStudents: '4,000+',
    campuses: [
        { name: 'Newlands School Dubai', city: 'Dubai', address: 'Al Warqa, Dubai', lat: 25.22, lng: 55.42, type: 'school' },
        { name: 'Al Khaleej International Sharjah', city: 'Sharjah', address: 'Al Azra - Al Riqa Suburb, Sharjah', lat: 25.34, lng: 55.41, type: 'school' },
        { name: 'Beaconhouse Private School', city: 'Al Ain', address: "Falaj Hazza', Al Ain", lat: 24.20, lng: 55.73, type: 'school' },
    ]
};

// =============================================================================
// OMAN - 2 Campuses
// =============================================================================
export const omanCampuses: CountryData = {
    code: 'oman',
    name: 'Oman',
    flag: '🇴🇲',
    description: 'Primary school and kindergarten in Muscat',
    totalCampuses: 2,
    totalStudents: '1,200+',
    campuses: [
        { name: 'Al Khuwair Campus', city: 'Muscat', address: 'Al Khuwair South, Street 2725', lat: 23.59, lng: 58.38, type: 'school' },
        { name: 'Kindergarten Qurum', city: 'Muscat', address: 'Building No. 54, Al Fauhood Street, Qurum Heights', lat: 23.60, lng: 58.49, type: 'preschool' },
    ]
};

// =============================================================================
// BANGLADESH - 1 Campus
// =============================================================================
export const bangladeshCampuses: CountryData = {
    code: 'bangladesh',
    name: 'Bangladesh',
    flag: '🇧🇩',
    description: 'Campus in Dhaka serving Bangladeshi families',
    totalCampuses: 1,
    totalStudents: '800+',
    campuses: [
        { name: 'Banani Campus', city: 'Dhaka', address: 'House 8, Road 9, Block F, Banani', lat: 23.79, lng: 90.41, type: 'school' },
    ]
};

// =============================================================================
// BELGIUM - 1 Location
// =============================================================================
export const belgiumCampuses: CountryData = {
    code: 'belgium',
    name: 'Belgium',
    flag: '🇧🇪',
    description: 'Gymboree Play & Music early learning center',
    totalCampuses: 1,
    totalStudents: '200+',
    campuses: [
        { name: 'Gymboree Play & Music', city: 'Brussels', address: 'Wezembeek, Brussels', lat: 50.85, lng: 4.35, type: 'preschool' },
    ]
};

// =============================================================================
// ALL COUNTRIES COMBINED
// =============================================================================
export const allCountries: CountryData[] = [
    pakistanCampuses,
    malaysiaCampuses,
    ukCampuses,
    thailandCampuses,
    philippinesCampuses,
    uaeCampuses,
    omanCampuses,
    bangladeshCampuses,
    belgiumCampuses,
];

// Get total campus count
export function getTotalCampusCount(): number {
    return allCountries.reduce((sum, country) => sum + country.totalCampuses, 0);
}

// Get country by code
export function getCountryByCode(code: string): CountryData | undefined {
    return allCountries.find(c => c.code === code);
}

// Get all campuses as flat array for globe
export function getAllCampusesFlat(): Campus[] {
    const result: Campus[] = [];
    for (const country of allCountries) {
        if (country.regions) {
            for (const region of country.regions) {
                result.push(...region.campuses);
            }
        }
        result.push(...country.campuses);
    }
    return result;
}
