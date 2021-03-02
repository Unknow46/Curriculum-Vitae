import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  skillsData: any = [
    {
      id: '1',
      skill: 'FLUTTER',
      progress: '85%'
    },
    {
      id: '2',
      skill: 'ANDROID (KOTLIN)',
      progress: '80%'
    },
    {
      id: '3',
      skill: 'PYTHON',
      progress: '80%'
    },
    {
      id: '4',
      skill: 'ANGULAR',
      progress: '65%'
    },
    {
      id: '5',
      skill: 'PENTEST',
      progress: '75%'
    },
    {
      id: '6',
      skill: 'ARCHITECTURE CLOUD AWS/TERRAFORM',
      progress: '80%'
    },
    {
      id: '7',
      skill: 'ELASTICSEARCH',
      progress: '60%'
    },
    {
      id: '8',
      skill: 'BASE DE DONNEES (PostgreSQL, MySQL)',
      progress: '80%'
    }
  ];

  educationData: any = [
    {
      id: '1',
      from_to_year: '2019 - 2021',
      education: 'Master Informatique : Ingénierie et Innovation',
      stream: 'Sciences - Industries | Informatique | Numerique',
      institution: 'Universite Catholique de Lille.'
    },
    {
      id: '2',
      from_to_year: '2018 - 2019',
      education: 'Cyber Defense Anti Intrusion des Systeme d\'Informations',
      stream: 'Cyber Securite',
      institution: 'Pôle Universitaire de Maubeuge'
    },
    {
      id: '3',
      from_to_year: '2016 - 2018',
      education: 'DUT Informatique',
      stream: 'Informatique, Traitement de l\'information',
      institution: 'Institut Universitaire de Technologie à Maubeuge'
    }
  ];

  exprienceData: any = [
    {
      id: '1',
      from_to_month_year: 'SEPTEMBRE 2019 - MAINTENANT',
      organization: 'SICAL',
      designation: 'Developpeur VB .NET / WEB ANGULAR / PYTHON',
      details: `Reprise en main de l'application de suivi de production du departement plastique "STYRAX" sous VB.NET
      ainsi que de la partie WEB et développement d'une solution d'export/import de données de la CRM Hubspot en python.`
    },
    {
      id: '2',
      from_to_month_year: 'MARS 2019 - JUIN 2019',
      organization: 'ACIC S.A',
      designation: 'Pentester',
      details: 'Realisation de test d\'intrusion au sein du reseau de l\'entreprise et resolution des failles.'
    },
    {
      id: '3',
      from_to_month_year: 'AVRIL 2018 - JUIN 2018',
      organization: 'Centre Hospitalier de Sambre-Avesnois',
      designation: 'Developpeur Mobile',
      details: 'Développement d\'une application Android de sensibilisation à la mise en place du RGPD.'
    }
  ];
  contactus(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'contact', data);
  }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
