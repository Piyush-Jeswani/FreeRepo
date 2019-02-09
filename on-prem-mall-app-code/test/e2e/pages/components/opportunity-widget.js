'use strict';

var lineChartWidget = require('./common/line-high-chart-widget.js');
var widgetID = 'visitor-behavior-tab-opportunity-line-chart-widget';

module.exports = {

  widgetTitle: function() {
    return element(by.id(widgetID)).element(by.className('widget-title')).element(by.css('span.ng-binding'));
  },

  clickExportButton: function() {
    var exportButton = element(by.id(widgetID)).element(by.className('export-widget')).element(by.css('a'));
    exportButton.click();
  },

  getXAxisDates: function(dateFormat) {
    return lineChartWidget.getXAxisDates(widgetID, dateFormat);
  },

  getHighestYAxisValue: function() {
    return lineChartWidget.getHighestYAxisValue(widgetID);
  },

  getSelectedPeriodDateRange: function(dateFormat) {
    return lineChartWidget.getSelectedPeriodDateRange(widgetID, dateFormat);
  },

  getSelectedPeriodDataValues: function() {
    return lineChartWidget.getSelectedPeriodDataValues(widgetID);
  },

  getSelectedPeriodDataSum: function(){
    return lineChartWidget.getSelectedPeriodDataSum(widgetID);
  },

  getSelectedPeriodOverall: function() {
    return lineChartWidget.getSelectedPeriodOverall(widgetID);
  },

  getPriorPeriodDateRange: function(dateFormat) {
    return lineChartWidget.getPriorPeriodDateRange(widgetID, dateFormat);
  },

  getPriorPeriodDataValues: function() {
    return lineChartWidget.getPriorPeriodDataValues(widgetID);
  },

  getPriorPeriodDataSum: function(){
    return lineChartWidget.getPriorPeriodDataSum(widgetID);
  },

  getPriorPeriodOverall: function() {
    return lineChartWidget.getPriorPeriodOverall(widgetID);
  },

  getPriorPeriodDelta: function() {
    return lineChartWidget.getPriorPeriodDelta(widgetID);
  },

  getPriorYearDateRange: function(dateFormat) {
    return lineChartWidget.getPriorYearDateRange(widgetID, dateFormat);
  },

  getPriorYearDataValues: function() {
    return lineChartWidget.getPriorYearDataValues(widgetID);
  },

  getPriorYearDataSum: function(){
    return lineChartWidget.getPriorYearDataSum(widgetID);
  },

  getPriorYearOverall: function() {
    return lineChartWidget.getPriorYearOverall(widgetID);
  },

  getPriorYearDelta: function() {
    return lineChartWidget.getPriorYearDelta(widgetID);
  },

  calculatePriorPeriodDelta: function(){
    return lineChartWidget.calculateDelta(this.getSelectedPeriodOverall(), this.getPriorPeriodOverall());
  },

  calculatePriorYearDelta: function() {
    return lineChartWidget.calculateDelta(this.getSelectedPeriodOverall(), this.getPriorYearOverall());
  },

  //used in translation tests
  getLegendText: function(){
    return lineChartWidget.getLegendTextLowerCase(widgetID);
  },

  //used in translation checks
  getSummaryFrameSelectedPeriodLabel: function(){
    return lineChartWidget.getSummaryFramePeriodLabel(widgetID, '.line-high-chart-widget-summary');
  },

  //used in translation checks
  getSummaryFrameCompare1Label: function(){
    return lineChartWidget.getSummaryFramePeriodLabel(widgetID, '.line-high-chart-widget-compare.prior-period');
  },

  //used in translation checks
  getSummaryFrameCompare2Label: function(){
    return lineChartWidget.getSummaryFramePeriodLabel(widgetID, '.line-high-chart-widget-compare.prior-year');
  },

  //used in translation checks
  getSummaryFrameMetricLabel: function(){
    return lineChartWidget.getSummaryFrameMetricLabel(widgetID);
  },

  //used in translation checks
  getTooltipTotalText: function() {
    return lineChartWidget.getHighChartTooltipTotalText(widgetID);
  }
};

