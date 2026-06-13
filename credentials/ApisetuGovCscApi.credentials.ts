import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovCscApi implements ICredentialType {
        name = 'N8nDevApisetuGovCscApi';

        displayName = 'Apisetu Gov Csc API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovCsc/apisetu-gov-csc.svg', dark: 'file:../nodes/ApisetuGovCsc/apisetu-gov-csc.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/csc/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/csc/v3',
                        description: 'The base URL of your Apisetu Gov Csc API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
