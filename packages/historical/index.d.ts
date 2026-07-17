/**
 * atlasconvert-historical
 *
 * Convert historical coins and ancient currencies to modern values.
 */

export interface ConversionOptions {
  from: string;
  to: string;
  amount?: number;
  method?: 'purchasing_power' | 'metal_value';
}

export interface ConversionResult {
  success: boolean;
  from: string;
  to: string;
  amount: number;
  result: number;
  method: string;
  context: string;
  confidence: string;
  accuracy?: {
    basis: string;
    period: string;
    region: string;
  };
  sources?: string[];
}

export interface TraditionalConversionResult {
  success: boolean;
  from: string;
  to: string;
  amount: number;
  result: number;
  unit_info: {
    name: string;
    region: string;
    type: string;
    description?: string;
  };
  confidence: string;
}

export interface LiveRatesResult {
  success: boolean;
  base: string;
  timestamp: string;
  rates: Record<string, number>;
  source: string;
}

export declare const COINS: string[];
export declare const TRADITIONAL_UNITS: string[];

export declare function convertHistorical(options: ConversionOptions): Promise<ConversionResult>;
export declare function convertTraditional(options: {
  from: string;
  to: string;
  amount?: number;
}): Promise<TraditionalConversionResult>;
export declare function getLiveRates(): Promise<LiveRatesResult>;
export declare function listCoins(): string[];
export declare function listTraditionalUnits(): string[];
