import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { AccumulationChart } from '@syncfusion/ej2-charts';
import { Template } from '@syncfusion/ej2-angular-base';
import { AccumulationSeriesCollectionDirective } from './series.directive';
import { AccumulationAnnotationsDirective } from './annotations.directive';

export const inputs: string[] = ['annotations','background','border','currencyCode','dataSource','enableAnimation','enablePersistence','enableRtl','enableSmartLabels','height','isMultiSelect','legendSettings','locale','margin','selectedDataIndexes','selectionMode','series','subTitle','subTitleStyle','theme','title','titleStyle','tooltip','width'];
export const outputs: string[] = ['animationComplete','annotationRender','beforePrint','chartMouseClick','chartMouseDown','chartMouseLeave','chartMouseMove','chartMouseUp','legendRender','load','loaded','pointClick','pointMove','pointRender','resized','seriesRender','textRender','tooltipRender'];
export const twoWays: string[] = [''];

/**
 * AccumulationChart Component
 * ```html
 * <ejs-accumulationchart></ejs-accumulationchart>
 * ```
 */
@Component({
    selector: 'ejs-accumulationchart',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childSeries: new ContentChild(AccumulationSeriesCollectionDirective), 
        childAnnotations: new ContentChild(AccumulationAnnotationsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class AccumulationChartComponent extends AccumulationChart implements IComponentBase {
    public childSeries: any;
    public childAnnotations: any;
    public tags: string[] = ['series', 'annotations'];

    @ContentChild('tooltipTemplate')
    @Template()
    public tooltip_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('ChartsPieSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsFunnelSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsPyramidSeries')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsAccumulationTooltip')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsAccumulationLegend')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsAccumulationSelection')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsAccumulationDataLabel')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('ChartsAccumulationAnnotation')); }catch {} 

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

