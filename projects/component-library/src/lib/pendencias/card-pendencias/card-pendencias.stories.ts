import { storiesOf } from '@storybook/angular';
import { text, array } from '@storybook/addon-knobs';
import { PendenciasModule } from '../pendencias.module';

storiesOf('Card-Pendencias', module)
    .add('Exemplo do card de pendencias', () => {
        return {
            moduleMetadata: {
                imports: [PendenciasModule],
            },
            props: {
                texto: text('texto', 'Informativo'),
                titulo: text('titulo', 'Título'),
                pendencias: array('pendencias', ['pendencia 1', 'pendencia 2']),
            },

            template: `
                <sf-card-pendencias
                [texto]="texto"
                [titulo]="titulo"
                [pendencias]="pendencias">
                </sf-card-pendencias>
            `,
        };
    });
