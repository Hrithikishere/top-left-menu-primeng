import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  constructor() {}
  items: MenuItem[] = [] as MenuItem[];
  itemss: MenuItem[] = [] as MenuItem[];
  display: boolean = false;

  Test: any | null = null;

  sideBar() {
    this.display = !this.display;
  }

  ngOnInit() {
    (this.items = [
      {
        disabled: false,
      },
    ]),
      (this.itemss = [
        {
          label: 'HOME',
          items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home' }],
        },
        {
          label: 'UI COMPONENTS',
          items: [
            { label: 'Form Layout', icon: 'pi pi-fw pi-id-card' },
            { label: 'Input', icon: 'pi pi-fw pi-check-square' },
            { label: 'Float Label', icon: 'pi pi-fw pi-bookmark' },
            { label: 'Invalid State', icon: 'pi pi-fw pi-info-circle' },
            { label: 'Button', icon: 'pi pi-fw pi-info-circle' },
            { label: 'Table', icon: 'pi pi-fw pi-th-large' },
            { label: 'List', icon: 'pi pi-fw pi-bars' },
            { label: 'Tree', icon: 'pi pi-fw pi-share-alt' },
            { label: 'Panel', icon: 'pi pi-fw pi-mobile' },
            { label: 'Overlay', icon: 'pi pi-fw pi-clone' },
            { label: 'Media', icon: 'pi pi-fw pi-image' },
            { label: 'Menu', icon: 'pi pi-fw pi-bars' },
            { label: 'Message', icon: 'pi pi-fw pi-comment' },
            { label: 'File', icon: 'pi pi-fw pi-file' },
            { label: 'Chart', icon: 'pi pi-fw pi-chart-bar' },
            { label: 'Misc', icon: 'pi pi-fw pi-circle-off' },
          ],
        },
        {
          label: 'PRIME BLOCK',
          items: [
            { label: 'Free Blocks', icon: 'pi pi-fw pi-home' },
            { label: 'All Blocks', icon: 'pi pi-fw pi-home' },
          ],
        },
        {
          label: 'UTILITIES',
          items: [
            { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime' },
            { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop' },
          ],
        },
      ]);
  }
}
