import { Shield, Users, FileSignature, Gavel, Scale, Car, AlertTriangle } from 'lucide-react';
import { PracticeArea, Testimonial, Stat, ServiceArea, Award, BlogPost } from './types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    title: "Criminal Defense",
    description: "Aggressive representation for those facing criminal charges. We protect your rights and your future.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Family Law",
    description: "Compassionate guidance through divorce, custody, and support matters during difficult times.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1591522810850-58128c5fb089?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Estate Planning",
    description: "Securing your legacy with comprehensive wills, trusts, and estate administration services.",
    icon: FileSignature,
    image: "https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Child Custody",
    description: "Protecting your parental rights and focusing on the best interests of your children.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1594172104140-c9a59e38ec77?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Divorce",
    description: "Navigating the complexities of separation with dignity and resolve.",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1581112105345-a06ad5976509?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Traffic Charges",
    description: "Mitigating penalties to keep you on the road and moving forward.",
    icon: Car,
    image: "https://static.wixstatic.com/media/2542b9_6f4e47d3d9904aee9e54e0276c97b17a~mv2.jpg/v1/fill/w_371,h_366,fp_0.50_0.50,q_90,enc_avif,quality_auto/2542b9_6f4e47d3d9904aee9e54e0276c97b17a~mv2.jpg"
  },
  {
    title: "DUI / DWI",
    description: "Expert defense against impaired driving charges to protect your record.",
    icon: AlertTriangle,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Michael Turner",
    initial: "M",
    text: "King & Rowe provided exceptional legal counsel during a very difficult time. Their attention to detail and aggressive defense strategy made all the difference.",
    timeframe: "2 months ago",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    initial: "S",
    text: "I felt truly heard and supported. Evan Rowe handled my custody case with such professionalism and care. Highly recommend this firm.",
    timeframe: "1 year ago",
    rating: 5
  },
  {
    name: "David Robinson",
    initial: "D",
    text: "Top notch attorneys. They know the local courts in Hickory inside and out. The outcome exceeded my expectations.",
    timeframe: "3 weeks ago",
    rating: 5
  }
];

export const STATS: Stat[] = [
  { value: "10+", label: "Years Serving NC" },
  { value: "1,500+", label: "Successful Cases" },
  { value: "7", label: "Core Practice Areas" },
  { value: "5.0", label: "Google Rating" }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    county: "Catawba County",
    cities: "Hickory, Newton, Conover",
    description: "Our home base. Deeply rooted connections in the local court system."
  },
  {
    county: "Burke County",
    cities: "Morganton, Valdese",
    description: "Providing expert legal counsel to families and businesses across Burke."
  },
  {
    county: "Caldwell County",
    cities: "Lenoir, Granite Falls",
    description: "Trusted advocacy for our neighbors to the north in Caldwell County."
  }
];

export const AWARDS: Award[] = [
  { 
    title: "Top 100 Trial Lawyers",
    image: "https://static.wixstatic.com/media/2542b9_df0a22bb7a4a46018e65edf6d192241f~mv2.png/v1/fill/w_160,h_133,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2542b9_df0a22bb7a4a46018e65edf6d192241f~mv2.png"
  },
  { 
    title: "Premier DUI Attorney",
    image: "https://static.wixstatic.com/media/2542b9_d98db9ff912147009e4e0cb328d5272a~mv2.png/v1/fill/w_224,h_158,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PremierDUIAttorney.png"
  },
  { 
    title: "NACDA Badge", 
    year: "2024",
    image: "https://static.wixstatic.com/media/2542b9_8ec1077bb2b040dcba5afd480a44b156~mv2.png/v1/fill/w_189,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/NACDA-Badge-2024.png"
  },
  { 
    title: "OnTopList",
    image: "https://www.ontoplist.com/images/ontoplist31.png?id=68c8c24970836"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "How the Smell of Marijuana Impacts Car Searches in North Carolina",
    category: "Police Search",
    date: "October 20, 2024",
    image: "https://images.unsplash.com/photo-1664857139186-6ecc7dbfa49d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "What Happens If My Spouse Won't Sign Divorce Papers in North Carolina",
    category: "Divorce",
    date: "October 15, 2024",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Common Mistakes to Avoid During a Divorce in North Carolina",
    category: "Family Law",
    date: "October 08, 2024",
    image: "https://images.unsplash.com/photo-1503314885798-a70f8f9028d3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "How to Protect Your CDL After a Speeding Ticket in North Carolina",
    category: "CDL License",
    date: "September 29, 2024",
    image: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "What Happens if You Miss a Criminal Court Date in North Carolina",
    category: "Criminal Defense",
    date: "September 14, 2024",
    image: "https://images.unsplash.com/photo-1676311862251-2bedaf454ede?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "What Happens to Your Digital Assets When You Die in North Carolina",
    category: "Estate Planning",
    date: "September 02, 2024",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
  }
];

export const ATTORNEYS = [
  {
    name: "Evan R. Rowe",
    role: "Managing Partner",
    specialties: "Family Law, Divorce, Child Custody",
    image: "https://static.wixstatic.com/media/2542b9_a858d1b838694ef4b5d1ee7092a3d21e~mv2.jpeg/v1/fill/w_392,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2542b9_a858d1b838694ef4b5d1ee7092a3d21e~mv2.jpeg"
  },
  {
    name: "Alexander J. King",
    role: "Senior Partner",
    specialties: "Criminal Defense, Estate Planning, DUI/DWI",
    image: "https://static.wixstatic.com/media/2542b9_95abdcca67504e778e5510afe9ef3255~mv2.jpg/v1/fill/w_400,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20DSC02482_edited.jpg"
  }
];

export const CONTACT_INFO = {
  phone: "828-466-3858",
  locations: [
    "2017 N Center Street, Hickory, NC",
    "11 East A Street, Newton, NC"
  ],
  email: "consult@kingrowe.com"
};